const Post = require("../models/Post");
//const User = require("../models/User");
const Comment = require("../models/Comment");

// création d'un commentaire
exports.createComment = async (req,res) => {
    post = await Post.findOne({ _id: req.params.id })
    .then((post) => {
      const commentObject = {
        userId: req.body.userId,
        body: req.body.body,
        postId : req.body.post._id,
      }
      const comment = new Comment({...commentObject});
      console.log(comment)
      comment
        .save()
        .then(() => res.status(201).json({ message: "commentaire enregistré !" }))
        .catch((error) => res.status(400).json({ error }));
      //post.comments.push(comment);
      post.comments.push(comment);
    })
    .catch((error) => res.status(500).json({ error }));
  };
  
  //voir tous les commentaires
  exports.getAllComment = (req,res) => {
  
  };
  
  // supprimer un commentaire
  exports.deleteComment = (req,res) => {
  
  };