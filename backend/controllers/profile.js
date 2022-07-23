const Profile = require("../models/Profile");
const fs = require("fs");

//création d'un profile
exports.createProfile = (req, res, next) => {
  const profileObject = JSON.parse(req.body.profile);
  delete profileObject._id;
  const profile = new Profile({
    ...profileObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  profile
    .save()
    .then(() => res.status(201).json({ message: "profile enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//sélection d'un profile
exports.getOneProfile = (req, res, next) => {
  Profile.findOne({ _id: req.params.id })
    .then((profile) => {
      res.status(200).json(profile);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

//modifier un profile
exports.modifyProfile = (req, res, next) => {
  //si ma requête contient un fichier
  const profileObject = req.file
    ? {
        //alors le fichier ressemble à ça: sinon (:) à ça:
        ...JSON.parse(req.body.profile),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  //trouver l'ancienne image et la supprimer
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
              res.status(200).json({ message: "Profile mise à jour!" });
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
      .then(() => res.status(200).json({ message: "Profile mise à jour!" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

//supprimer un profile
exports.deleteProfile = (req, res, next) => {
  Profile.findOne({ _id: req.params.id })
    .then((profile) => {
      const filename = profile.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Profile.deleteOne({ _id: req.params.id })
          .then(() =>
            res.status(200).json({ message: "Profile supprimé !" })
          )
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

//voir toutes les profiles
exports.getAllProfile = (req, res, next) => {
  Profile.find()
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};