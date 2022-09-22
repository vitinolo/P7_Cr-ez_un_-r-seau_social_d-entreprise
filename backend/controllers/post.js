const Post = require("../models/Post");
const User = require("../models/User");
const fs = require("fs");
const { db } = require("../models/Post");

//création d'un post
exports.createPost = (req, res, next) => {
  const postObject = {
    userId: req.body.userId,
    body: req.body.body,
  }
  if (req.file){
    postObject.imageUrl= `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
  }else{
    postObject.imageUrl = ""
  }
  const post = new Post({...postObject});
  delete postObject._id;
  console.log(post)
  post
    .save()
    .then(() => res.status(201).json({ message: "post enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  };
  
//voir toutes les posts
exports.getAllPost = async(req, res, next) => {
  posts = await Post.find().sort({created_at: -1});
  users = await User.find({}, "lastname name");
  res.status(200).json({posts, users});   
};

//sélection d'un post
exports.getOnePost = async(req, res, next) => {
  users = await User.find({}, "lastname name");
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      res.status(200).json({post,users});
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

//modifier un post
exports.modifyPost = async (req, res, next) => {
  //récupèrer user et post
  post =  await Post.findOne({ _id: req.params.id})
  user =  await User.findOne({ _id:req.body.userId })
  console.log(req.body.userId)
  const userAuthorized = user.isAdmin || req.body.userId === post.userId
  //si ma requête contient un fichier 
  const postObject = req.file ? {...req.body.post, imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,} : { ...req.body };
  
  //si l'utilisateur n'est pas autorisé, message d'erreur
  if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
  }
  //trouver le post et le supprimer
  if (req.file) {
    Post.findOne({ _id: req.params.id })
      .then((post) => {
        
          const filename = post.imageUrl.split("/images/")[1];
          fs.unlink(`images/${filename}` )  
        
          Post.findOneAndUpdate(
            { _id: req.params.id },
            { ...postObject, _id: req.params.id }
          )
            .then(() => {
              res.status(200).json({ message: "Post mise à jour!" });
            })
            .catch((error) => {
              res.status(400).json({ error });
            });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
    //le mettre à jour
  } else {
    Post.updateOne(
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Post mise à jour" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

//supprimer un post
 exports.deletePost = async(req, res, next) =>{
   // récupèrer user et post
   post = await Post.findOne({ _id: req.params.id })
   user = await User.findOne({ _id:req.body.userId })
   const userAuthorized = user.isAdmin || req.body.userId === post.userId
   //si l'utilisateur n'est pas autorisé, message d'erreur
   if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
    }
    if (req.file) {
      Post.findOne({ _id: req.params.id })
      .then((post) => {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {  
      Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Post supprimé !" }))
        .catch((error) => res.status(400).json({ error })); 
        })})
    }else{
      Post.findOne({_id:req.params.id})
      Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Post supprimé !" }))
        .catch((error) => res.status(400).json({ error }))
    }
};

//création et modification des likes pour les posts
exports.createLike = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const userId = req.body.userId;
      const userHasAlreadyLiked = post.usersLiked.includes(userId);

      if (!userHasAlreadyLiked) {
        post.usersLiked.push(userId);
      }else{
        const index = post.usersLiked.findIndex(a => a == userId);
        post.usersLiked.splice(index, 1)
      }
      post.likes = post.usersLiked.length;
      post.save();
      res.status(200).json({ post })
    })
    .then((post) => res.status(200).json(post))
    .catch((error) => {
      res.status(500).json({ error });
    });
};
