import React, { useEffect, useState} from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const VotePublication = ({ post }) =>{
    const [liked, setLiked] = useState (false);
    let userId;
    const like = () =>{
        setLiked(true)
    }
    const unlike = () =>{

    }
    useEffect(() => {
        if (post.usersLiked.includes(userId)) setLiked(true)
    },[userId, post.userLiked, liked])

    return (
    <div className="vote_publication">
        
        {userId && liked === false && (
            <div><span  alt="like" className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span></div>
        )}
        { userId && liked  === true &&(
            <span  onClick={like} alt="like" className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
        )}
    </div>                
    );
};



export default VotePublication;