import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"; 
import "../styles/style.css";

const CommentsPublisher = () => {
  const {postId} = useParams();
  const [inputMessage, setInputMessage] = useState("")

  function handleClick (e) {
      handleSubmit(e)
  }
  function handleSubmit (e) {
    e.preventDefault()
    function postData() {
        const userId = localStorage.getItem("userId");
        const comment = {
          "userId": userId,
          "body": inputMessage,
          "postId": postId
        }

      return axios
      .post('http://localhost:3001/api/comments',comment,{
        headers:{
          'Authorization': 'Bearer '+ localStorage.getItem("token")
        }
      })
      
      .then(function (res){
        console.log(res)         
      })
      .catch((err) => alert(err ="mettre une image et/ou un texte !"))   
    }
        postData();
        window.location.reload(true);
        //on réinitialise le formulaire après l'envoi 
        useState = ("")
  }
    function handleChangeMessage (e) {
      setInputMessage(e.target.value)
    }
    
    return (
        <div onSubmit={handleSubmit} className="comments_publication">
            <span className="feed_title">Commenter:</span>
            <div className="publication_send">
                <input title="Cliquez puis écrire votre message" placeholder="Tapez ici votre message" type="text" name="text" id="text_feed" value={inputMessage} onChange={handleChangeMessage}></input>
            </div>
            <button onClick={handleClick} className="publication_button_send" title="Cliquez pour afficher votre message">Publier le commentaire</button>
        </div>
    );
}

export default CommentsPublisher;
