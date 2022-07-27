const Post = require("../models/Post");
const fs = require("fs");

//création d'un post
exports.createPost = (req, res, next) => {
  const postObject = req.body.post;
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
exports.modifyPost = (req, res, next) => {
  //si ma requête contient un fichier
  const postObject = req.file
    ? {
        //alors le fichier ressemble à ça: sinon (:) à ça:
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
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

//supprimer un post
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Post supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

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
      const userWantsToLike = req.body.like == 1;
      const userWantsToClear = req.body.like == 0;

      if (userWantsToLike) {
        post.usersLiked.push(userId);
      }
      if (userWantsToClear) {
        if (post.usersLiked.includes(userId)) {
          const index = post.usersLiked.indexOf(userId);
          post.usersLiked.splice(index, 1);
        }
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
