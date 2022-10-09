import { Link }  from "react-router-dom";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";

const Feed = ({post,user}) => {
    let userId;
    userId = localStorage.getItem("userId", userId);
    const userAuthorized = userId === "6340460a1b09256cab8f4094" || userId === post.userId;
    
    return (
        <div className="post">
            <h3 className="article-post">Publication :</h3>
            <span className="created_at">Publié le : {post.created_at} </span>
            <div className="profile_firstandlastname">
                <span className="profile_firstname"> {user.name} </span>
                <span className="profile_lastname"> { user.lastname} </span>
            </div> 
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