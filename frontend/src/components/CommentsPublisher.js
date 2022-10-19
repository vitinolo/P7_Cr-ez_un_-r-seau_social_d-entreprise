import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"; 
import "../styles/style.css";

function CommentsPublisher ({ setComments })  {
  const {postId} = useParams();
  const [inputMessage, setInputMessage] = useState("");

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
      .post('comments',comment)
      .then(res => {
        setComments(comments => [{
          ...res.data.comment,
          user: {'name': 'Vous', lastname: '', _id: userId}
        }, ...comments]);
        alert(res.data.message);
        console.log(res.data)
        //refreshPage() ;  
      })
      .catch((err) => alert(err ="mettre une image et/ou un texte !"))   
    }
      postData();
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
