import "../styles/style.css";
//const User = require("../models/User");
//const Post = require("../models/Post");

const Profile = (req, res, next) => { 
   /* let user ={
        name: user.name,
        lastname: user.lastname,
    }
    User.findOne({ _id: req.params.id })
    .then((user) => {
        res.status(200).json({
            user: user
        });  
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
    let post ={
        created_at: post.created_at,
    };
    Post.findOne({ _id: req.params.id })
    .then((post) => {
        res.status(200).json({
            post: post
        });  
    })
    .catch((error) => {
        res.status(400).json({ error });
    }; */ 
    return (
        <div className="profile">
            <span className="profile_firstname"> nom </span>
            <span className="profile_lastname"> prénom </span>
            <span className="created_at">créé le:</span>
        </div>
    );
}

export default Profile;