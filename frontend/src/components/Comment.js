import "../styles/style.css";
import Profile from "../components/Profile";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const Comment = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
                axios
                  .get('http://localhost:3001/api/comments',{
                        headers:{
                          'Authorization': 'Bearer '+ localStorage.getItem("token")
                        }
                      })
                      .then((res) => setData(res.data)); 
              },[]);
    return (
                <>
                        <div className="comment" >{data.map((comment, index) => (
                                
                               <div key={index} comment={comment}>
                                        <h3><span className="comment-post">Commentaire de :</span></h3>
                                        <Profile /> 
                                        
                                                <div className="comments" >
                                                        <div >
                                                                <img className="img_comment" src="" alt=""></img>
                                                                <p className="texte_publication_comment">{comment.body}</p> 
                                                        </div>  
                                                </div>
                                        
                                </div>
                        ))}</div>
                        
                </>       
        );
}

export default Comment