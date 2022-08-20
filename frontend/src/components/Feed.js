import "../styles/style.css";
import Comments from "../components/Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Feed() {
  return (
    <div className="feed_publication">
        <div className="profile">
            <div className="profile_img"></div>
            <span className="profile_name">marcello</span>
            <span className="date_edition">08/09/2002</span>
        </div>
        <div className="img_publication">

        </div>
        <div className="texte_publication">
          ça va bien ?
        </div>
          <div className="modifyAndRemovePost">
            <div className="icone"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></div>
            <div className="icone"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></div>
          </div>
        <div className="vote_publication">
          <div className="icone"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></div>
          <div className="icone"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" /></div>
        </div>
        <Comments />
    </div>
      

  );
}

export default Feed;
