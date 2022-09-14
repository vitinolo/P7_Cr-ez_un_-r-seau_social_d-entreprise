import axios from "axios";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Profile from "../components/Profile";
import HeaderPosts from "../components/HeaderPosts";
import Comment from "../components/Comment";
import CommentsPublisher from "../components/CommentsPublisher";


//récupèrer id et userId

let _id = recupId();
let userId;
localStorage.getItem("userId", userId);

function recupId () 
{
  let queryStringUrlId = window.location.search;
  let urlSearchParams = new URLSearchParams(queryStringUrlId);
  return urlSearchParams.get('id');   
} 

const FeedPostDetail = (post) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts/'+ _id,{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      },
    })
    .then((res) => setData(res.data));   
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
                  <img className="img_feed" src={data.imageUrl} alt=""/>
                  <p className="texte_publication_feed">{data.body}</p>
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