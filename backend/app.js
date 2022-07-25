const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const helmet = require("helmet");
const path = require("path");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
const dotenv = require("dotenv");
const result = dotenv.config();

//connexion à mongDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// limiteur de connexion
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limite chaque IP à 100 requêtes par fenêtre (ici, pour 15 minutes)
  standardHeaders: true, // Retourne rate limit info dans `RateLimit-*` headers
  legacyHeaders: false, // Désactive les entêtes `X-RateLimit-*`
});

//ajout des middlewares à l'api
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/posts", postRoutes);
app.use("/api/auth", limiter, userRoutes);
app.use("/api/comments", commentRoutes);
app.use(helmet());
module.exports = app;
