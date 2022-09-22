const Comment = require("../models/Comment");
const Post = require("../models/Post")
const { db } = require("../models/Post");


//création d'un Commentaire
exports.createComment = (req, res, next) => {
  const commentObject = {
  userId: req.body.userId,
  body: req.body.body,
  }
  const comment = new Comment({...commentObject});
  //rajouter dans tableau comments
  Post.comments.push(comment);
  console.log(comment)
  Post.comments = Post.comment.length;
  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  };

  //voir toutes les commentaires
  exports.getAllComment = async(req, res, next) => {
    comments = await Comment.find().sort({created_at: -1});
    res.status(200).json({ comments});
  };

//sélection d'un commentaire
exports.getOneComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => {
      res.status(200).json({comment});
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};


//supprimer un commentaire
exports.deleteComment = (req, res, next) =>{
  // récupèrer user et post
  const comment = Comment.findOne({ id: req.params.id })
  const user = User.findOne({ id:req.body.userId })

  Comment.findOne({_id:req.params.id})
  Comment.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
    .catch((error) => res.status(400).json({ error }))
 
};

