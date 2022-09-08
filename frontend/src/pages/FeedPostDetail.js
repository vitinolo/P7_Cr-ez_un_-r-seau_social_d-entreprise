
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link }  from "react-router-dom";
import Profile from "../components/Profile";
import HeaderPosts from "../components/HeaderPosts";
import Comment from "../components/Comment";
import CommentsPublisher from "../components/CommentsPublisher";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const FeedPostDetail = (post) => {
    const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => setData(res.data));   
  },[]);
  console.log({data})
  
    return (
        <div className="feedpostdetail">
            <HeaderPosts />
            <CommentsPublisher /> 
            <div className="feedpublidetail">
              <div className="post">
                  <Link to="/feedpostdetail" title="Cliquez vers le post">
                      <h3><span className="article-post">Publication de :</span></h3>
                      <Profile />
                      <img className="img_feed" src="" alt=""></img>
                      <p className="texte_publication_feed">{post.body}</p>
                      <div className="vote_publication">
                          <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
                      </div>
                  </Link>
                  <Comment />
              </div>
            </div>
        </div>
    );
};

export default FeedPostDetail;