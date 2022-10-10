import HeaderPosts from "../components/HeaderPosts";
import FeedsPublisher from "../components/FeedsPublisher"
import Feed from "../components/Feed";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import "../styles/style.css";


function FeedPostsPage () {
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

    
    return(
    <div className="feedposts">
        <HeaderPosts />
        <FeedsPublisher setPosts={setPosts} posts={posts}/>
        <div className="feed_publication" >
            <div className="posts">{posts.sort((postA, postB) =>
                {
                  const a= postA.created_at.replace(/\D/g,'')
                  const b= postB.created_at.replace(/\D/g,'')

                  if (a > b) {return -1; }
                  if (a < b) { return 1; }
                  return 0;
                }).map((post, index) => (
                <Feed key={index} post={post} setPosts={setPosts} user={users.find( u => u._id === post.userId)} />))}
            </div>
        </div>     
    </div>
    )
}
export default FeedPostsPage
