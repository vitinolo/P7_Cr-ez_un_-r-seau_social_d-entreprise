import "../styles/style.css";
function Comment(){
    return(
    <div className="comment">
            <div className="profile_img">photo</div>
            <span className="profile_name">angelo</span>
            <span className="date_edition">08/09/2002</span>
            <div className="img_publication"></div>
            <div className="texte_publication">ceci est un commentaire !</div>
    </div>);
}

export default Comment