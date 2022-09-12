import "../styles/style.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';

//afficher les commentaires
const Comments = () => {
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
    <div className="comments">{data.map((comment, index) => (     
            <Comment key={index} comment={comment} />))}                                
    </div>          
  )
}
export default Comments ;

