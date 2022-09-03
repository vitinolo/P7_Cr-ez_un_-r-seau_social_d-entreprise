import Profile from "./Profile";
import IconesInteract from "./IconesInteract";


const Feed = ({post},{comment}) => {
    return (
        <>
            <div className="post">
                <Profile />
                <img className="img_feed" src={post.imageUrl} alt=""></img>
                <p className="texte_publication_feed">{post.body}</p>
            </div>
            <IconesInteract />
        </>
    );
};

export default Feed;