import axios from "axios";
import React, {  useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import HeaderPosts from "../components/HeaderPosts";
import Comment from "../components/Comment";
import CommentsPublisher from "../components/CommentsPublisher";
import FeedDetail from "../components/FeedDetail";

const FeedPostDetail = () => {
  const {postId} = useParams();
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/posts/${postId}`,{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setPost(res.data.post);
      setUsers(res.data.users)
      console.log(res.data.post)
    })  
  },[postId]);
  
  return (
      <div className="feedpostdetail">
          <HeaderPosts />
          <div className="feedpublidetail">
            <FeedDetail post={post} user={users.find( u => u._id === post.userId)} />
          </div>
          <CommentsPublisher /> 
          <div className="comment_publication">
            <Comment />
          </div>
      </div>

  );
};

export default FeedPostDetail;