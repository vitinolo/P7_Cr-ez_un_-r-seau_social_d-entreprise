import "../styles/style.css";
import Comment from "./Comment";
import axios from "axios";
import React, { useState, useEffect } from 'react';

//afficher les commentaires
const Comments = ({post}) => { 
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/comments',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setComments(res.data.comments)
      setUsers(res.data.users)
    })  
  },[]);

  return (
    <div className="comments">{comments.map((comment, index) => (   
            <Comment key={index} post={post} comment={comment} user={users.find( u => u._id === post.userId)} />))}                           
    </div>          
  )
}
export default Comments ;

