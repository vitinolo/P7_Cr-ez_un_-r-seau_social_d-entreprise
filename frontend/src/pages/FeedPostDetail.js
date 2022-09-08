
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import Feed from "../components/Feed";
import HeaderPosts from "../components/HeaderPosts";
import CommentsPublisher from "../components/CommentsPublisher";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const FeedPostDetail = (post) => {
    const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/posts/_id',{
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
            <div className="feedpublidetail">
              <Feed  post={post} />
            </div>
            <div className="iconesinterdetail">
                <div className="modifyAndRemovePost">
                    <button className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
                    <button className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
                </div>   
            </div>
             <CommentsPublisher /> 
        </div>
    );
};

export default FeedPostDetail;