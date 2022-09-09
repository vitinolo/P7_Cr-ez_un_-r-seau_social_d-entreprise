import "../styles/style.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';

//afficher les publications et commentaires
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
    <>
            <div className="comments" >{data.map((comment, index) => (     
                   <div key={index} comment={comment}>
                            <h3><span className="comment-post">Commentaire de :</span></h3>
                            <Profile /> 
                            <div className="comments" >
                                    <div >
                                            <img className="img_comment" src="" alt=""></img>
                                            <p className="texte_publication_comment">{comment.body}</p> 
                                    </div>  
                            </div>
                    </div>))}
            </div>
            
    </>       
);
}
export default Comments ;

