import { Link }  from "react-router-dom";
import Profile from "./Profile";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";

const Feed = ({post,user}) => {
    return (
        <div className="post">
            <Link to="/feedpostdetail" title="Cliquez vers le post">
                <h3 className="article-post">Publication de:</h3>
                <span className="created_at">Publié le: {post.created_at} </span>
                <Profile post ={post} user={user}/>
                <div className="img_container">
                    <img className="img_feed" src={post.imageUrl} alt=""/>
                </div>
                <span className="texte_publication_feed">{post.body}</span>
            </Link>
            <VotePublication post ={post} />
            <IconesInteract post ={post}/>     
        </div>
    );
}

export default Feed;