import "../styles/style.css";

const Comment = ({comment}) => { 
       
        return (     
                <div className="comment" >     
                        
                        <h3 className="comment-post">Commentaire de :</h3>

                        <div className="comments" >
                                <div >
                                        <span className="texte_publication_comment">{comment.body}</span> 
                                </div>  
                        </div>
                            
                </div>                            
        );
}

export default Comment;