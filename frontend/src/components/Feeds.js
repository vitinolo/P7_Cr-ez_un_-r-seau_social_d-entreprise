import "../styles/style.css";
import Feed from "./Feed";
import axios from "axios";
import React, { useState, useEffect } from 'react';

//afficher les publications et commentaires
const Feeds = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => setData(res.data))  
  },[]);
  
  console.log(data)
  
  return ( 
    <div className="feed_publication" >
        <div className="posts">{data.map((post, index) => (
            <Feed key={index} post={post} />))}
        </div>
    </div>
  )
}
export default Feeds;


















