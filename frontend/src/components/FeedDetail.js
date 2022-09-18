
import ProfileComment from "./ProfileComment";
import VotePublication from "./VotePublication";

const FeedDetail = ({post,user}) => {
    return (
        <div className="post">
                <h3 className="article-post">Publication de:</h3>
                <span className="created_at">Publié le: {post.created_at} </span>
                <ProfileComment post ={post} user={user}/>
                <div className="img_container">
                    <img className="img_feed" src={post.imageUrl} alt=""/>
                </div>
                <span className="texte_publication_feed">{post.body}</span>
            <VotePublication post ={post} />    
        </div>
    );
}

export default FeedDetail;