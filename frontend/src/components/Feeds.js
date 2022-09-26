import "../styles/style.css";
import Feed from "./Feed";
import axios from "axios";
import React, { useState, useEffect } from 'react';

//afficher les publications 
const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => {
      setPosts(res.data.posts)
      setUsers(res.data.users)
    })  
  },[]);
  
  return ( 
    <div className="feed_publication" >
        <div className="posts">{posts.map((post, index) => (
            <Feed key={index} post={post} user={users.find( u => u._id === post.userId)} />))}
        </div>
    </div>
  )
}
export default Feeds;


















