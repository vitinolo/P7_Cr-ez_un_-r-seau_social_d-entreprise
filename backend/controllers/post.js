const Post = require("../models/Post");
const User = require("../models/User");
const Comment =  require("../models/Comment");
const fs = require("fs");
const { db } = require("../models/Post");

//création d'un post
exports.createPost = async (req, res, next) => {
  const postObject = {
    user: req.body.userId,
    body: req.body.body,
  }
  if (req.file){
    postObject.imageUrl= `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
  }else{
    postObject.imageUrl = ""
  }
  const post = new Post({...postObject, created_at: Date.now()});
  await post.save();
  return res.status(201).send({ message: "post enregistré !", post});
};
  
//voir toutes les posts
exports.getAllPost = async(req, res, next) => {
  const posts = await Post.find().populate({ path: 'user', select: ['name', 'lastname']}).sort({created_at: -1});
  res.status(200).json({posts});   
};

//sélection d'un post
exports.getOnePost = async(req, res, next) => {
  const users = await User.find({}, "lastname name");
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
  const post =  await Post.findOne({ _id: req.params.id})
  const user =  await User.findOne({ _id:req.body.userId })
  const userAuthorized = user.isAdmin || req.body.userId == post.user.toString();
  //si ma requête contient un fichier post ressemble à ça sinon à ça
  const postObject = req.file ? {...req.body, imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,} : { ...req.body };
  
  //si l'utilisateur n'est pas autorisé, message d'erreur
  if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
  }
  //trouver le post et le supprimer
  if (req.file) {
    Post.findOne({ _id: req.params.id })
      .then((post) => {
          const filename = post.imageUrl.split("/images/")[1];
          fs.unlink(`images/${filename}`, () => { 
            Post.findOneAndUpdate(
              { _id: req.params.id },
              { ...postObject, _id: req.params.id }
            )
            .then(() => 
              res.status(200).json({ message: "Post mise à jour!", post: postObject}))
          })
        })
    //le mettre à jour
  } else {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    );
    Post.findOne({ _id: req.params.id })
    .then((post) => {
      res.status(200).json({ message: "Post mise à jour!", post: post })})
  }
};

//supprimer un post
exports.deletePost = async(req, res, next) =>{
  // récupèrer user et post
  post = await Post.findOne({ _id: req.params.id })
  user = await User.findOne({ _id:req.body.userId })
  const userAuthorized = user.isAdmin || req.body.userId === post.user.toString()
  //si l'utilisateur n'est pas autorisé, message d'erreur
  if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
  }

  if(post.imageUrl){
    const filename = post.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      console.log('Image deleted');
    });
  }
  await Comment.deleteMany({postId: req.params.id})
  await Post.deleteOne({ _id: req.params.id });
  return res.send({ message: "Post supprimé !" });
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

