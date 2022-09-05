import Profile from "./Profile";
import IconesInteract from "./IconesInteract";
import Comment from "./Comment";

const Feed = ({post}) => {
    return (
        <>
            <div className="post">
                <Profile />
                <img className="img_feed" src={post.imageUrl} alt=""></img>
                <p className="texte_publication_feed">{post.body}</p>
                <IconesInteract />
                <Comment />
            </div>
        </>
    );
};

export default Feed;