import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import "../styles/style.css";
import axios from "axios";

function CommentsPublisher () {
    const [inputMessage, setInputMessage] = useState("")
    const {postId} = useParams();
    useEffect(() => {
      const userid = localStorage.getItem("userId");
      const userId = userid;
      const form = new FormData();
      form.append("userId", userId);
      form.append("body", inputMessage);
      axios
      .post(`http://localhost:3001/api/comment/${postId}`, form,{
        headers:{
          'Authorization': 'Bearer '+ localStorage.getItem("token")
        }
      })
      // rècupèrer le token et le userId dans le localStorage
      .then((res) => {
        setInputMessage(res.data.comment);
        console.log(res.data.setInputMessage)  
      })
    },[]);
    
    function handleClick (e) {
        handleSubmit(e)
    }
    function handleSubmit (e) {
      e.preventDefault()
        setInputMessage()
        window.location.reload(true);
        //on réinitialise le formulaire après l'envoi 
        useState = ("")
      
      }
    function handleChangeMessage (e) {
      setInputMessage(e.target.value)
    }
    
    return (
        <div onSubmit={handleSubmit} className="comments_publication">
            <span className="feed_title">Commentez:</span>
            <div className="publication_send">
                <input title="Cliquez puis écrire votre message" placeholder="Tapez ici votre message" type="text" name="text" id="text_feed" value={inputMessage} onChange={handleChangeMessage}></input>
            </div>
            <button onClick={handleClick} className="publication_button_send" title="Cliquez pour afficher votre message">Publier le commentaire</button>
        </div>
    );
}

export default CommentsPublisher;
