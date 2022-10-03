import { Link }  from "react-router-dom";
import Profile from "./Profile";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";
import Moment from "moment";

const Feed = ({post,user}) => {
    let userId;
    userId = localStorage.getItem("userId", userId);
    const userAuthorized = user.admin === true || userId === post.userId;
    const postDate = post.created_at;
    const formatDate = Moment({postDate}).format('DD-MM-YYYY');
        return (
                <div className="post">
                        <h3 className="article-post">Publication de :</h3>
                        <span className="created_at">Publié le : {formatDate}</span>
                        <Profile post ={post} user={user}/>
                    <Link to={`/feed/${post._id}`} title="Cliquer vers la publication">
                        <div className="img_container">
                            <img className="img_feed" src={post.imageUrl} alt="un post"/>
                        </div>
                        <span className="texte_publication_feed">{post.body}</span>
                    </Link>
                    {userAuthorized && <IconesInteract post ={post}/>}
                    <VotePublication post ={post} />    
                </div>
            );
}

export default Feed;