import VotePublication from "./VotePublication";
import CommentsPublisher from "../components/CommentsPublisher";
import Comment from "./Comment";
import "../styles/style.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

const FeedDetail = ({post,user}) => {
  const {postId} = useParams();
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  console.log({user})
  
  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/comments/${postId}`,{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
        setComments(res.data.comments)
        setUsers(res.data.users)
        console.log(res.data.comments)
      })  
  },[postId]);

    return (
        <>
            <div className="post">
                <h3 className="article-post">Publication :</h3>
                <span className="created_at">Publié le: {post.created_at}</span>
                {/*<div className="profile_firstandlastname">
                  <span className="profile_firstname"> {user.name} </span>
                  <span className="profile_lastname"> {user.lastname} </span>
                </div>*/} 
                <div className="img_container">
                    <img className="img_feed" src={post.imageUrl} alt=""/>
                </div>
                <span className="texte_publication_feed">{post.body}</span>
                <CommentsPublisher /> 
                <VotePublication post ={post} user={user} />
                <h3 className="comment-post">Commentaires :</h3>
                <div className="comments">{comments.map((comment, index) => (   
                    <Comment key={index} comment={comment}  user={users.find( u => u._id === post.userId)} />))}                           
                </div>    
            </div>

        </>
    );
}

export default FeedDetail;