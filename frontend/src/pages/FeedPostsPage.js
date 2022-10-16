import HeaderPosts1 from "../components/HeaderPosts1";
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
        .get('posts')
        .then((res) => {
          setPosts(res.data.posts)
          setUsers(res.data.users)
        })  
    },[]);
console.log(posts);
    return(
      <div className="feedposts">
          <HeaderPosts1 />
          <FeedsPublisher setPosts={setPosts} posts={posts}/>
          <div className="feed_publication" >
              <div className="posts">{posts.map((post, index) => (
                  <Feed key={index} users={users} post={post} setPosts={setPosts} posts={posts} />))}
              </div>
          </div>     
      </div>
    )
}
export default FeedPostsPage
