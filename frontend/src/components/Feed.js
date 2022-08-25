import "../styles/style.css";
import Comments from "../components/Comments";
import Profile from "../components/Profile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTrash, faPen, faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function Feed() {
  axios.get('http://localhost:3001/api/posts')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

  return (
    <div className="feed_publication">
        <Profile />
        <div className="img_publication">
          Ceci est une image
        </div>
        <div className="texte_publication">
          Ceci est un message
        </div>
        <div className="modifyAndRemovePost">
          <span className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></span>
          <span className="icone-comment icone"><FontAwesomeIcon icon={faComment} /></span>
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
Feed();
export default Feed;
