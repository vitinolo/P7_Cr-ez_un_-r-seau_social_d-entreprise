import "../styles/style.css";
import Comments from "../components/Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTrash, faPen, faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'


function Feed() {
  return (
    <div className="feed_publication">
        <div className="profile">
            <div className="profile_img">photo de</div>
            <span className="profile_name">marcello</span>
            <span className="date_edition">08/09/2002</span>
        </div>
        <div className="img_publication">
          Ceci est une image
        </div>
        <div className="texte_publication">
          Ceci est un message
        </div>
        <div className="modifyAndRemovePost">

          <span className="icone-comment icone"><FontAwesomeIcon icon={faComment} /></span>
          <span className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></span>
          <span className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></span>
        </div>
        <div className="vote_publication">
          <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
          <span className="icone-dislike icone"><FontAwesomeIcon icon={faThumbsDown} /></span>
        </div>
        <Comments />
    </div>

  );
}

export default Feed;
