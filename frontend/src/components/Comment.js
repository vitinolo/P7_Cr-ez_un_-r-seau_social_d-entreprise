import "../styles/style.css";
import Profile from "../components/Profile";


const Comment = (comment) => {    
    return (
                <>
                <div className="comment" >     
                        <>
                        <h3><span className="comment-post">Commentaire de :</span></h3>
                        <Profile /> 
                        <div className="comments" >
                                <div >
                                        <img className="img_comment" src={comment.imageUrl} alt=""/>
                                        <p className="texte_publication_comment">{comment.body}</p> 
                                </div>  
                        </div>
                        </>
                </div>
                        
                </>       
        );
}

export default Comment