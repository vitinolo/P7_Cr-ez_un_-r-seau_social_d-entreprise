import React, { useState } from 'react';
import "../styles/style.css";
import axios from "axios";

function FeedsPublisher() {
  const [inputMessage, setInputMessage] = useState("")
  const [image, setImage] = useState ("")

  function handleClick (e) {
    handleSubmit(e)
  }

  function handleSubmit (e) {
    e.preventDefault()
    function postData() {
      let userId;
      let file;
      const formData = new FormData();
      formData.append("filename", file);
      formData.append("destination", "images");
      let imageUrl = formData;
        return axios
        .post('http://localhost:3001/api/posts',{
          post:{
            userId: localStorage.getItem("userId", userId),
            body: inputMessage,
            imageUrl, 
          }
        },{
          headers:{
            'Authorization': 'Bearer '+ localStorage.getItem("token")
          }
        })
        // rècupèrer le token et le userId dans le localStorage
        .then(function (res){
          let token;
          let userId;
          localStorage.getItem("token", token);
          localStorage.getItem("userId", userId);            
        })
        .catch((err) => alert(err ="identifiant ou mot de passe inconnut !"))   
      }
      postData();
      //on réinitialise le formulaire après l'envoi 
      useState = ("")
    } 

    function handleChangeMessage (e) {
      setInputMessage(e.target.value)
    }

    function handleChangeImage (e) {
      setImage(e.target.value)
    }

    return (
      <div onSubmit={handleSubmit} className="feeds_publication">
        <span className="feed_title">Publiez votre message:</span>
        <div className="feed_publication_send">
          <input type="file" accept=".Jpg, .Jpeg, .jpg, .jpeg, .Png, .png" className="publication_file" title="Cliquez pour ajouter une image" value={image} onChange={handleChangeImage}></input>
          <input title="Cliquez puis écrire votre message" placeholder="Tapez ici votre message" type="text" name="text" id="text_feed" value={inputMessage} onChange={handleChangeMessage}></input>
        </div>
        <button onClick={handleClick} className="publication_button_send" title="Cliquez pour afficher votre message">Publier l'article</button>    
      </div>
    );
}

export default FeedsPublisher;
