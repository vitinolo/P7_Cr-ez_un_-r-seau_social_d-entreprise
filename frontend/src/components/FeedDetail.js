import VotePublication from "./VotePublication";
//import IconesInteract from "./IconesInteract";
//import Profile from "./Profile";

const FeedDetail = ({post,user}) => {
    //let userId;
    //userId = localStorage.getItem("userId", userId);
    //const userAuthorized = user.admin === true || userId === post.userId;
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
                {/*{userAuthorized && <IconesInteract post ={post}/>}*/}
                <VotePublication post ={post} user={user} />   
            </div>

          </>
    );
}

export default FeedDetail;