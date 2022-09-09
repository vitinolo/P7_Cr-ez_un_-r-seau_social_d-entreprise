import "../styles/style.css";
import Profile from "../components/Profile";


const Comment = (comment) => {
        
    return (
                <>
                        <div className="comment" >     
                               <div>
                                        <h3><span className="comment-post">Commentaire de :</span></h3>
                                        <Profile /> 
                                        <div className="comments" >
                                                <div >
                                                        <img className="img_comment" src="" alt=""></img>
                                                        <p className="texte_publication_comment">{comment.body}</p> 
                                                </div>  
                                        </div>
                                </div>
                        </div>
                        
                </>       
        );
}

export default Comment