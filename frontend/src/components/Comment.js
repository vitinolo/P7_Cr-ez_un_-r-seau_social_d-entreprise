import "../styles/style.css";
import Profile from "../components/Profile";
function Comment(){
    return(
    <div className="comment">
            <Profile />
            <div className="img_publication">Ceci est une image</div>
            <div className="texte_publication">ceci est un commentaire !</div>
    </div>);
}

export default Comment