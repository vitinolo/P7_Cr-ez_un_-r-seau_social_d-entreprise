const Comment = require("../models/Comment");
const User = require("../models/User");
const fs = require("fs");
const { db } = require("../models/Post");


//création d'un Commentaire
exports.createComment = (req, res, next) => {
  const commentObject = {
  userId: req.body.userId,
  body: req.body.body,
}
if (req.file){
  commentObject.imageUrl= `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
}else{
  commentObject.imageUrl = ""
}
const comment = new Comment({...commentObject});
delete commentObject._id;
console.log(comment)
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

//voir toutes les commentaires
exports.getAllComment = async(req, res, next) => {
  comments = await Comment.find().sort({created_at: -1});
  res.status(200).json({ comments});
};

//supprimer un commentaire
exports.deleteComment = (req, res, next) =>{
  // récupèrer user et post
  const comment = Comment.findOne({ id: req.params.id })
  const user = User.findOne({ id:req.body.userId })
 
 if (req.file) {
   Comment.findOne({ _id: req.params.id })
   .then((comment) => {
     const filename = comment.imageUrl.split("/images/")[1];
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

