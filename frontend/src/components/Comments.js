import "../styles/style.css";
import Comment from "./Comment";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

//afficher les commentaires
const Comments = ({post}) => { 
  const {id} = useParams();
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/comments/${id}`,{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setComments(res.data.comments)
      setUsers(res.data.users)
    })  
  },[id]);

  return (
    <div className="comments">{comments.map((comment, index) => (   
            <Comment key={index} post={post} comment={comment} user={users.find( u => u._id === post.userId)} />))}                           
    </div>          
  )
}
export default Comments ;

