import axios from "axios";
import React, { useState, useEffect } from 'react';
import HeaderPosts from "../components/HeaderPosts";
import Comment from "../components/Comment";
import CommentsPublisher from "../components/CommentsPublisher";
import Feed from "../components/Feed";

const FeedPostDetail = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:3001/api/users',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setUsers(res.data.users)
    })  
  },[]);

  useEffect(() => {
    axios
    .get('http://localhost:3001/api/comments',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setComments(res.data.comments)
    })  
  },[]);
  
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setPosts(res.data.posts)
    })  
  },[]);

  return (
      <div className="feedpostdetail">
          <HeaderPosts />
          <CommentsPublisher /> 
          <div className="feedpublidetail">{posts.map((post, index) => (
            <Feed key={index} post={post} />))}
            <div className="comment_publication">{comments.map((comment, index) => (
              <Comment key={index} comment={comment} user={users.find( u => u._id === comment.userId)} />))}
            </div>
          </div>
      </div>

  );
};

export default FeedPostDetail;