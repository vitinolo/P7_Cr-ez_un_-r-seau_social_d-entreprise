import Profile from "./Profile";
import { Link }  from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import IconesInteract from "./IconesInteract";

const Feed = ({post}) => {
    return (
        <>
            <div className="post">
                <Link to="/feedpostdetail" title="Cliquez vers le post">
                    <h3><span className="article-post">Publication de:</span></h3>
                    <Profile />
                    <img className="img_feed" src="" alt=""></img>
                    <p className="texte_publication_feed">{post.body}</p>
                    <div className="vote_publication">
                        <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
                    </div>
                </Link>
                <IconesInteract />
            </div>
        </>
    );
};

export default Feed;