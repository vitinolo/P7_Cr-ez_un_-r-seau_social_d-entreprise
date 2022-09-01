import "../styles/style.css";
import Profile from "../components/Profile";
function Comment(){
    return(
    <div className="comment">
            <Profile />
            <div className="img_publication"></div>
            <div className="texte_publication"></div>
    </div>);
}

export default Comment