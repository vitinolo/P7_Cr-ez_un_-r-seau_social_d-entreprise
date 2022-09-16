import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const VotePublication = ({post}) =>{
    function handleClick (e) {
        handleSubmit(e)
    }

    function handleSubmit (e) {
        
        const likeOrNot = () =>{
            axios
                .post('http://localhost:3001/api/posts/{:id}/like',{
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
                
            })
            console.log("click")
        }
        likeOrNot();
        
    }
    return (
        <div className="vote_publication">
            <button onClick={handleClick} alt="like" className="icone-like icone" ><FontAwesomeIcon icon={faThumbsUp} /></button>
            <div className="numberOfLikes" >{post.likes}</div>
        </div>                
    );
}

export default VotePublication;