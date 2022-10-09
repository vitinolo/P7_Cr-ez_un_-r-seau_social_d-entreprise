import "../styles/style.css";

const Comment = ({comment}) => { 
        return (     
                <div className="comment" >     
                        <div className="comment_body" >
                                <span className="texte_publication_comment">{comment.body}</span> 
                        </div>        
                </div>                            
        );
}

export default Comment;