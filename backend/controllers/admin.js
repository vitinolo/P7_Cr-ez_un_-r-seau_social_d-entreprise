
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.signup = (req, res, next) => {
      const admin = new Admin({
        email: `${process.env.ADMIN_EMAIL}`,
        password: `${process.env.ADMIN_PASSWORD}`,
        name: req.body.name,
        lastname: req.body.lastname,
      });
      admin
        .save()
        .then(() => res.status(201).json({ message: "Administrateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
  Admin.findOne({ email: `${process.env.ADMIN_EMAIL}` })
    .then((admin) => {
    if (!admin) {
    return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }

    if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
        }
        res.status(200).json({
        userId: user._id,
        token: jwt.sign({ userId: user._id }, "edbjrvnjvnkknrr4", {
            expiresIn: "24h",
        }),
    })
    
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
