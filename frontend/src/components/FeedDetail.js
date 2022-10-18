import axios from "axios";
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import moment from "moment";
import VotePublication from "./VotePublication";
import CommentsPublisher from "../components/CommentsPublisher";
import Comment from "./Comment";
import "../styles/style.css";

const FeedDetail = ({post}) => {
  console.log(post._id)
  const {postId} = useParams();
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const date = moment(post.created_at)

  useEffect(() => {
    axios
    .get(`comments/${postId}`)
    .then(res => {
      setComments(res.data.comments)
      setUsers(res.data.users)
      console.log(res.data.comments)
      })  
    },[postId]);
    
    return (
            <div className="post">
                <h3 className="article-post">Publication :</h3>
                <span className="created_at">Publié le: {date.format("DD MMM YYYY HH:mm ")}</span>
                <div className="firstandlastname">
                  <span className="firstname"> </span>
                  <span className="lastname">  </span>
                </div>
                <div className="img_container">
                    <img className="img_feed" src={post.imageUrl} alt=""/>
                </div>
                <span className="texte_publication_feed">{post.body}</span>
                <CommentsPublisher setComments={setComments}/> 
                <VotePublication post ={post}  />
                <h3 className="comment-post">Commentaires :</h3>
                <div className="comments">{comments.map((comment, index) => (   
                    <Comment key={index} comment={comment} comments={comments} setComments={setComments} user={users.find( u => u._id === comment.userId)} />))}                           
                </div>    
            </div>

    );
}

export default FeedDetail;