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
  comments = await Comment.find().sort({created_at: -1});
  users = await User.find({}, "lastname name");
  res.status(200).json({comments, users});   
};


// supprimer un commentaire
exports.deleteComment = (req,res) => {

};