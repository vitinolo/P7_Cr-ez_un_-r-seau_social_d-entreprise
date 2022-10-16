import axios from "axios";
import React, {  useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import HeaderPosts from "../components/HeaderPosts";
import FeedDetail from "../components/FeedDetail";

const FeedPostDetail = () => {
  const {postId} = useParams();
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get(`posts/${postId}`)
      .then((res) => {
        setPost(res.data.post);
        setUsers(res.data.users)
        console.log(res.data.post)
        console.log(res.data.users)
      })  
  },[postId]);
  
  return (
      <div className="feedpostdetail">
          <HeaderPosts />
          <div className="feedpublidetail">
            <FeedDetail post={post} user={users.find( u => u._id === post.user_id)} />
          </div>
      </div>

  );
};

export default FeedPostDetail;