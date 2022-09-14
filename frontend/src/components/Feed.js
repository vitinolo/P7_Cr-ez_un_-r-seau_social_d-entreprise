import { Link }  from "react-router-dom";

import Profile from "./Profile";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";

const Feed = ({post}) => {
  
    return (
        <div className="post">
        
            <Link to="/feedpostdetail" title="Cliquez vers le post">
                <h3 className="article-post">Publication de:</h3>
                <Profile post ={post}/>
                <img className="img_feed" src={post.imageUrl} alt=""/>
                <span className="texte_publication_feed">{post.body}</span>
            </Link>
            <VotePublication post ={post} />
            <IconesInteract />
            
        </div>
    );
}

export default Feed;