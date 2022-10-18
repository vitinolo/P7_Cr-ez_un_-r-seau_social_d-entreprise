import { Link }  from "react-router-dom";
import IconesInteract from "./IconesInteract";
import VotePublication from "./VotePublication";
import moment from "moment";

const Feed = ({post, posts, setPosts}) => {
    const userId = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem('isAdmin');
    const isAuthorized = (userId === post.user._id || isAdmin === 'true');
    const date = moment(post.created_at)
    
    return (
        <div className="post">
            <h3 className="article-post">Publication :</h3>
            <span className="created_at">Publié le : {date.format("DD MMM YYYY HH:mm ")} par {post.user.name} {post.user.lastname}</span>
            <Link to={`/feed/${post._id}`} title="Cliquer vers la publication">
                <div className="img_container">
                    { post.imageUrl !== '' && <img className="img_feed" src={post.imageUrl} alt="" />}
                </div>
                <span className="texte_publication_feed">{post.body}</span>
            </Link>
            {isAuthorized ? <IconesInteract post ={post} posts={posts} setPosts={setPosts}/>: null}
            <VotePublication post ={post} />    
        </div>
    );
}

export default Feed;