import "../styles/style.css";
import ProfileComment from "../components/ProfileComment";




const Comment = (user) => { 
        
        return (
                <>
                <div className="comment" >     
                        <>
                        <h3 className="comment-post">Commentaire de :</h3>
                        <ProfileComment user={user}/>
                        <div className="comments" >
                                <div >
                                        <img className="img_comment" src="" alt=""/>
                                        <p className="texte_publication_comment"></p> 
                                </div>  
                        </div>
                        </>
                </div>                      
                </>       
        );
}

export default Comment