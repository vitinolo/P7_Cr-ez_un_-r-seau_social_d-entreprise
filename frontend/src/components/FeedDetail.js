//import axios from "axios";
//import React, {  useEffect } from 'react';
//import {useParams} from "react-router-dom";
//import Comment from "../components/Comment";
//import ProfileComment from "./ProfileComment";
//import VotePublication from "./VotePublication";


const FeedDetail = ({post}) => {
  
    return (
        <>
            <div className="post">
                <h3 className="article-post">Publication de:</h3>
                <span className="created_at">Publié le: {post.created_at}  </span>
                {/*<ProfileComment post ={post._id} user={user}/>*/}
                <div className="img_container">
                    <img className="img_feed" src={post.imageUrl} alt=""/>
                </div>
                <span className="texte_publication_feed">{post.body}</span>
                {/*<VotePublication postId ={post} />*/}    
            </div>
            <div className="comment_publication">
                {/*<Comment />*/}
            </div>
          </>
    );
}

export default FeedDetail;