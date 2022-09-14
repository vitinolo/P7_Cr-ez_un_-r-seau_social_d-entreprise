
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const VotePublication = (post) =>{
    return (
        <div className="vote_publication">  
            <button  alt="like" className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></button>
            <div className="numberOfLikes">2</div>
        </div>                
    );
}



export default VotePublication;