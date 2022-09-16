import "../styles/style.css";
import Profile from "../components/Profile";
import axios from "axios";
import React, { useState, useEffect } from 'react';


const Comment = (comment) => { 
        const [data, setData] = useState([]);
        
        useEffect(() => {
        axios
        .get('http://localhost:3001/api/comments/6321e5ee4ae1c3f0d96727e4',{
        headers:{
                'Authorization': 'Bearer '+ localStorage.getItem("token")
        }
        })
        .then((res) => setData(res.data));   
        },[]);   
        return (
                <>
                <div className="comment" >     
                        <>
                        <h3 className="comment-post">Commentaire de :</h3>
                        <Profile /> 
                        <div className="comments" >
                                <div >
                                        <img className="img_comment" src={data.imageUrl} alt=""/>
                                        <p className="texte_publication_comment">{data.body}</p> 
                                </div>  
                        </div>
                        </>
                </div>                      
                </>       
        );
}

export default Comment