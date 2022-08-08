const Comment = require("../models/Comment");
const fs = require("fs");
const { equal } = require("assert");
const User = require("../models/User");

//création d'un Commentaire
exports.createComment = (req, res, next) => {
  const commentObject = req.body.comment;
  let comment;
  if (req.file) {
    comment = new Comment({
      ...commentObject,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });
  } else {
    comment = new Comment({ ...commentObject });
  }
  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//sélection d'un commentaire
exports.getOneComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

//modifier un commentaire
async function modifyComment(req, res, next) {
  // récupèrer user et comment
  const comment = await Comment.findOne({ id: req.params.id })
  const user = await User.findOne({ id:req.body.userId })
  const userAuthorized = user.isAdmin || req.body.userId === comment.userId
  //si ma requête contient un fichier
  const commentObject = req.file? {...JSON.parse(req.body.comment),imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,}: { ...req.body };
  //si l'utilisateur n'est pas autorisé, message d'erreur
      if(!userAuthorized){
        return  res.status(403).json({ error: new Error("unauthorized request") });
      }
      if (req.file) {
        Comment.findOne({ _id: req.params.id })
          .then((comment) => {
            const filename = comment.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
              Comment.updateOne(
                { _id: req.params.id },
                { ...commentObject, _id: req.params.id }
              )
                .then(() => {
                  res.status(200).json({ message: "Commentaire mise à jour!" });
                })
                .catch((error) => {
                  res.status(400).json({ error });
                });
            });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
        //le mettre à jour
      } else {
        Comment.updateOne(
          { _id: req.params.id },
          { ...commentObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Commentaire mise à jour!" }))
          .catch((error) => res.status(400).json({ error }));
      }
};
module.exports.modifyComment = modifyComment

//supprimer un commentaire
async function deleteComment(req, res, next) {
  // récupèrer user et comment
  const comment = await Comment.findOne({ id: req.params.id })
  const user = await User.findOne({ id:req.body.userId })
  const userAuthorized = user.isAdmin || req.body.userId === comment.userId
  if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
  }
  if (req.file) {
    Comment.findOne({ _id: req.params.id })
    .then((comment) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {  
    Comment.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
      .catch((error) => res.status(400).json({ error })); 
      })})
  }else{
    Comment.findOne({_id:req.params.id})
    Comment.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
      .catch((error) => res.status(400).json({ error }))
  }
};
module.exports.deleteComment = deleteComment

//voir toutes les commentaires
exports.getAllComment = (req, res, next) => {
  Comment.find()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//création et modification des likes pour les commentaires
exports.createLike = (req, res) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => {
      const userId = req.body.userId;
      const userHasAlreadyLiked = comment.usersLiked.includes(userId);

      if (!userHasAlreadyLiked) {
        comment.usersLiked.push(userId);
      }else{
        const index = comment.usersLiked.findIndex(a => a == userId);
        comment.usersLiked.splice(index, 1)
      }
      
      comment.likes = comment.usersLiked.length;
      comment.save();
      return comment;
    })
    .then((comment) => res.status(200).json(comment))
    .catch((error) => {
      res.status(500).json({ error });
    });
};
