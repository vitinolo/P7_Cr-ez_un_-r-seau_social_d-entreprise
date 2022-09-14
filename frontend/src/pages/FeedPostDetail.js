
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Profile from "../components/Profile";
import HeaderPosts from "../components/HeaderPosts";
import Comment from "../components/Comment";
import CommentsPublisher from "../components/CommentsPublisher";
import axios from "axios";
import React, { useEffect } from 'react';

//récupèrer id et userId
const id = recupId();
let userId;
userId =localStorage.getItem("userId", userId);

function recupId () 
{
    let queryStringUrlId = window.location.search;
    let urlSearchParams = new URLSearchParams(queryStringUrlId);
    return urlSearchParams.get('id');   
} 

const FeedPostDetail = (post) => {
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts/'+{id},{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      },
    })
    .then (post => {
       post ={
        imageUrl : post.imageUrl,
        body: post.body
       } 
    }) 
  },[]);
  console.log(post)
  
  return (
      <div className="feedpostdetail">
          <HeaderPosts />
          <CommentsPublisher /> 
          <div className="feedpublidetail">
            <div className="post">
                <>
                  <h3 className="article-post">Publication de :</h3>
                  <Profile />
                  <img className="img_feed" src={post.imageUrl} alt=""/>
                  <p className="texte_publication_feed">{post.body}</p>
                  <div className="vote_publication">
                      <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
                  </div>
                </>
            </div>
            <Comment />
          </div>
      </div>
  );
};

export default FeedPostDetail;