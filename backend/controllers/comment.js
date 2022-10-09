const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

// création d'un commentaire
exports.createComment = (req,res) => { 
      const commentObject = {
        userId: req.body.userId,
        body: req.body.body, 
        postId : req.body.postId
      }
      const comment = new Comment({...commentObject});
      delete commentObject._id;
      console.log(comment)
      comment
        .save()
        .then(() => res.status(201).json({ message: "commentaire enregistré !" }))
        .catch((error) => res.status(400).json({ error }));
};

//voir tous les commentaires
exports.getAllComment = async(req, res, next) => {
  comments = await Comment.find({postId: req.params.postId}).sort({created_at: -1});
  users = await User.find({}, "lastname name");
  res.status(200).json({comments, users});   
};

//sélection d'un commentaire
exports.getOneComment = async(req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => {
      res.status(200).json({comment});
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// supprimer un commentaire
exports.deleteComment = async(req,res) => {
   // récupèrer user et comment
   comment = await Comment.findOne({ _id: req.params.id })
   user = await User.findOne({ _id:req.body.userId })
   const userAuthorized = user.isAdmin || req.body.userId === comment.userId
   
   //si l'utilisateur n'est pas autorisé, message d'erreur
   if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
    }
    //supprimer le commentaire
    Comment.findOne({_id:req.params.id})
    Comment.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Commentairet supprimé !" }))
      .catch((error) => res.status(400).json({ error }))
};