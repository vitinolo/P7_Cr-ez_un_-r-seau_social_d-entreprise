const Profile = require("../models/Profile");
const fs = require("fs");

//création d'un profil
exports.createProfile = (req, res, next) => {
  const profileObject = req.body.profile;
  let profile;
  if (req.file) {
    profile = new Profile({
      ...profileObject,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    });
  } else {
    profile = new Profile({ ...profileObject });
  }
  profile
    .save()
    .then(() => res.status(201).json({ message: "profil enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//sélection d'un profil
exports.getOneProfile = (req, res, next) => {
  Profile.findOne({ _id: req.params.id })
    .then((profile) => {
      res.status(200).json(profile);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

//modifier un profil
async function modifyProfile(req, res, next)  {
  //récupèrer user et profile
  const profile = await Profile.findOne({ id: req.params.id})
  const user = await User.findOne({ id:req.body.userId })
  const userAuthorized = user.isAdmin || req.body.userId === comment.userId
  //si ma requête contient un fichier 
  const profileObject = req.file? {...JSON.parse(req.body.profile),imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,}: { ...req.body };
  //si l'utilisateur n'est pas autorisé, message d'erreur
  if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
  }
  //trouver le profile et le supprimer
  if (req.file) {
    Profile.findOne({ _id: req.params.id })
      .then((profile) => {
        const filename = profile.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Profile.updateOne(
            { _id: req.params.id },
            { ...profileObject, _id: req.params.id }
          )
            .then(() => {
              res.status(200).json({ message: "Profil mise à jour!" });
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
    Profile.updateOne(
      { _id: req.params.id },
      { ...profileObject, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Profil mise à jour!" }))
      .catch((error) => res.status(400).json({ error }));
  }
};
module.exports.modifyProfile = modifyProfile

//supprimer un profil
async function deleteProfile(req, res, next) {
   // récupèrer user et profil
   const comment = await Profile.findOne({ id: req.params.id })
   const user = await User.findOne({ id:req.body.userId })
   const userAuthorized = user.isAdmin || req.body.userId === comment.userId
   //si l'utilisateur n'est pas autorisé, message d'erreur
   if(!userAuthorized){
    return  res.status(403).json({ error: new Error("unauthorized request") });
  }
  if (req.file) {
    Profile.findOne({ _id: req.params.id })
    .then((Profile) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {  
    Profile.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Profil supprimé !" }))
      .catch((error) => res.status(400).json({ error })); 
      })})
  }else{
    Profile.findOne({_id:req.params.id})
    Profile.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Profil supprimé !" }))
      .catch((error) => res.status(400).json({ error }))
  }
};
module.exports.deleteProfile = deleteProfile

//voir tous les profils
exports.getAllProfile = (req, res, next) => {
  Profile.find()
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

