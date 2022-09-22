import { Link }  from "react-router-dom";
import Profile from "./Profile";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";

const Feed = ({post,user}) => {
    let userId;
    userId = localStorage.getItem("userId", userId);
    const userAuthorized = user.admin === true || userId === post.userId;

        return (
                <div className="post">
                        <h3 className="article-post">Publication de:</h3>
                        <span className="created_at">Publié le: {post.created_at}</span>
                        <Profile post ={post} user={user}/>
                    <Link to={`/feed/${post._id}`} title="Cliquez vers le post">
                        <div className="img_container">
                            <img className="img_feed" src={post.imageUrl} alt=""/>
                        </div>
                        <span className="texte_publication_feed">{post.body}</span>
                    </Link>
                    {userAuthorized && <IconesInteract post ={post}/>}
                    <VotePublication post ={post} />    
                </div>
            );
}

export default Feed;