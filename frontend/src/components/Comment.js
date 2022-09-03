import "../styles/style.css";
import Profile from "../components/Profile";

const Comment = ({comment}) => {
    return (
        <div className="comment">
                <Profile />
                <img className="img_comment" src={comment.imageUrl} alt=""></img>
                <span className="texte_publication_comment">{comment.body}</span>
        </div>);
}

export default Comment