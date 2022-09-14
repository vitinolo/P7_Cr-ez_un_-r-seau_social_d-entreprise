import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

let userId;
userId =localStorage.getItem("userId", userId);

const VotePublication = ({post}) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3001/api/posts', {
          headers:{
            'Authorization': 'Bearer '+ localStorage.getItem("token")
          },  
          userId
        })
        .then((post) => setData(post))
      },[]);
    console.log(data)
  
    return (
        <div className="vote_publication">
            <button  alt="like" className="icone-like icone" ><FontAwesomeIcon icon={faThumbsUp} /></button>
            <div className="numberOfLikes" >{post.likes}</div>
        </div>                
    );
}



export default VotePublication;