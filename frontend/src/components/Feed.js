import "../styles/style.css";
import Comments from "../components/Comments";
import Profile from "../components/Profile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTrash, faPen, faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import React, { useState, useEffect } from 'react';


function Feed(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/api/posts',
      );
      setData(result.data);
      
    };
  fetchData();
  },[])
  console.log(data);
  return(
    <>
      {data.map((post) => (
        <div className="feed_publication" key={post._id} post={post}>
            <Profile />
            <div className="img_publication" >
              <img src="" alt=""></img>
            </div>
            <div className="texte_publication">
              <p>ceci est un texte</p>
            </div>
            <div className="modifyAndRemovePost">
              <span className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></span>
              <span className="icone-comment icone"><FontAwesomeIcon icon={faComment} /></span>
              <span className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></span>
            </div>
            <div className="vote_publication">
              <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
              <span className="icone-dislike icone"><FontAwesomeIcon icon={faThumbsDown} /></span>
            </div>
            <Comments />
        </div>))
      }
    </>
  )
}

export default Feed;



















/*
  const getFeed = () => {
    return axios
    .get('http://localhost:3001/api/posts')
    .then(posts =>
    {
      console.log(posts)
      const post = posts.map((post, _id)=>
        <div key={_id}>
          {post.body}
        </div>
      );
      Feed(post);
    })
    .catch((err) => console.log(err)) 
  }
  getFeed();

function Feed (post) {
  return (
    <div className="feed_publication">
        <Profile />
        <div className="img_publication">
          Ceci est une image
        </div>
        <div className="texte_publication">
          $({post.body})
        </div>
        <div className="modifyAndRemovePost">
          <span className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></span>
          <span className="icone-comment icone"><FontAwesomeIcon icon={faComment} /></span>
          <span className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></span>
        </div>
        <div className="vote_publication">
          <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
          <span className="icone-dislike icone"><FontAwesomeIcon icon={faThumbsDown} /></span>
        </div>
        <Comments />
    </div>
  );
}

  


export default Feed;*/
