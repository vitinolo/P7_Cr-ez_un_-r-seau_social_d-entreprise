//import axios from "axios";
//import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Profile from "../components/Profile";
import HeaderPosts from "../components/HeaderPosts";
import Comment from "../components/Comment";
import CommentsPublisher from "../components/CommentsPublisher";


//récupèrer id et userId
/*
let _id = recupId();
let userId;
localStorage.getItem("userId", userId);

function recupId () 
{
  let queryStringUrlId = window.location.search;
  let urlSearchParams = new URLSearchParams(queryStringUrlId);
  return urlSearchParams.get('id');   
} 
*/
const FeedPostDetail = () => {
  

  return (
      <div className="feedpostdetail">
          <HeaderPosts />
          <CommentsPublisher /> 
          <div className="feedpublidetail">
            <div className="post">
                <>
                  <h3 className="article-post">Publication de :</h3>
                  <Profile />
                  <div className="img_feed_container">
                    <img className="img_feed" src="" alt=""/>
                  </div>
                  <p className="texte_publication_feed">texte</p>
                  <div className="vote_publication">
                      <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
                  </div>
                </>
            <Comment />
            </div>
          </div>
      </div>
  );
};

export default FeedPostDetail;