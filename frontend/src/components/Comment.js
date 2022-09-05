import "../styles/style.css";
import Profile from "../components/Profile";

const Comment = ({comment}) => {
    return (
        <div className="comment">
                <Profile />
                <img className="img_comment" src="" alt=""></img>
                <span className="texte_publication_comment">blablabla</span>
        </div>);
}

export default Comment