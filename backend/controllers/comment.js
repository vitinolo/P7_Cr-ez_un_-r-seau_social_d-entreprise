const Comment = require("../models/Comment");
const fs = require("fs");

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
exports.modifyComment = (req, res, next) => {
  //si ma requête contient un fichier
  const commentObject = req.file
    ? {
        //alors le fichier ressemble à ça: sinon (:) à ça:
        ...JSON.parse(req.body.comment),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  //trouver l'ancienne image et la supprimer
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

//supprimer un commentaire
exports.deleteComment = (req, res, next) => {
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
      const userWantsToLike = req.body.like == 1;
      const userWantsToClear = req.body.like == 0;

      if (userWantsToLike) {
        comment.usersLiked.push(userId);
      }
      if (userWantsToClear) {
        if (comment.usersLiked.includes(userId)) {
          const index = comment.usersLiked.indexOf(userId);
          comment.usersLiked.splice(index, 1);
        }
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
