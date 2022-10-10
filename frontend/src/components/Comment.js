import "../styles/style.css";
import moment from "moment";

const Comment = ({comment, user}) => { 
        const date = moment(comment.created_at)
        return (     
                <div className="comment" >     
                        <div className="comment_body" >
                        <span className="created_at">Publié le : {date.format("DD MMM YYYY HH:mm ")}</span>
                        par
                        <span className="profile_firstname"> {user.name}</span>
                                <span className="texte_publication_comment">{comment.body}</span> 
                        </div>        
                </div>                            
        );
}

export default Comment;