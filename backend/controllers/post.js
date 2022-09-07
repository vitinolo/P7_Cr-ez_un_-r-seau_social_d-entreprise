const Post = require("../models/Post");
const fs = require("fs");

//création d'un post
exports.createPost = (req, res, next) => {
  const postObject = req.body.post;
  console.log("salutt",postObject)
  let post;
  if (req.file) {
    post = new Post({
      ...postObject,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });
  } else {
    post = new Post({ ...postObject });
  }
  console.log("salut",post)
  post
    .save()
    .then(() => res.status(201).json({ message: "post enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//sélection d'un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

//modifier un post
async function modifyPost(req, res, next)  {
  //récupèrer user et post
  const post = await Post.findOne({ id: req.params.id})
  const user = await User.findOne({ id:req.body.userId })
  const userAuthorized = user.isAdmin || req.body.userId === comment.userId
  //si ma requête contient un fichier 
  const postObject = req.file? {...JSON.parse(req.body.post),imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,}: { ...req.body };
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
          Post.updateOne(
            { _id: req.params.id },
            { ...postObject, _id: req.params.id }
          )
            .then(() => {
              res.status(200).json({ message: "Post mise à jour!" });
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
    Post.updateOne(
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Post mise à jour!" }))
      .catch((error) => res.status(400).json({ error }));
  }
};
module.exports.modifyPost = modifyPost

//supprimer un post
async function deletePost(req, res, next) {
   // récupèrer user et post
   const comment = await Post.findOne({ id: req.params.id })
   const user = await User.findOne({ id:req.body.userId })
   const userAuthorized = user.isAdmin || req.body.userId === comment.userId
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
module.exports.deletePost = deletePost

//voir toutes les posts
exports.getAllPost = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//création et modification des likes pour les posts
exports.createLike = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const userId = req.body.userId;
      const userHasAlreadyLiked = comment.usersLiked.includes(userId);

      if (!userHasAlreadyLiked) {
        post.usersLiked.push(userId);
      }else{
        const index = post.usersLiked.findIndex(a => a == userId);
        post.usersLiked.splice(index, 1)
      }
      post.likes = post.usersLiked.length;
      post.save();
      return post;
    })
    .then((post) => res.status(200).json(post))
    .catch((error) => {
      res.status(500).json({ error });
    });
};
