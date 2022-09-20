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

  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/posts/${postId}`,{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setPost(res.data.post);
      console.log(res.data.post)
    })  
  },[postId]);
  return (
      <div className="feedpostdetail">
          <HeaderPosts />
          <CommentsPublisher /> 
          <div className="feedpublidetail">
            <FeedDetail post={post} />
          </div>
          <div className="comment_publication">
            <Comment />
          </div>
      </div>

  );
};

export default FeedPostDetail;