import VotePublication from "./VotePublication";
import CommentsPublisher from "../components/CommentsPublisher";
//import Profile from "./Profile";

const FeedDetail = ({post,user}) => {
    
    return (
        <>
            <div className="post">
                <h3 className="article-post">Publication de:</h3>
                <span className="created_at">Publié le: {post.created_at}  </span>
                {/*<Profile />*/}
                <div className="img_container">
                    <img className="img_feed" src={post.imageUrl} alt=""/>
                </div>
                <span className="texte_publication_feed">{post.body}</span>
                <CommentsPublisher /> 
                <VotePublication post ={post} user={user} />   
            </div>

        </>
    );
}

export default FeedDetail;