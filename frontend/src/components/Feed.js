import { Link }  from "react-router-dom";

import Profile from "./Profile";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";

const Feed = ({post}) => {
  
    return (
        <>
        <div className="post">
            <Link to="/feedpostdetail" title="Cliquez vers le post">
                <h3><span className="article-post">Publication de:</span></h3>
                <Profile />
                <img className="img_feed" src={post.imageUrl} alt=""/>
                <span className="texte_publication_feed">{post.body}</span>
            </Link>
            <VotePublication post ={post} />
            <IconesInteract />
        </div>
        </>
    );
};

export default Feed;