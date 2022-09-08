import React, { useState } from 'react';
import "../styles/style.css";
import axios from "axios";

function CommentsPublisher () {
    const [inputMessage, setInputMessage] = useState("")
    const [image, setImage] = useState ("")
    
    function handleClick (e) {
        handleSubmit(e)
      }
    
      function handleSubmit (e) {
        e.preventDefault()
        function postData() {
            return axios
            .post('http://localhost:3001/api/comments',{
                body: inputMessage,
                imageURL: image,
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
        <div onSubmit={handleSubmit} className="comments_publication" id="publisher_comment">
            <span className="feed_title">Commentez:</span>
            <div className="publication_send">
                <input  type="file" accept=".Jpg, .Jpeg, .png" className="publication_file" title="Cliquez pour ajouter une image" value={image} onChange={handleChangeImage}></input>
                <input title="Cliquez puis écrire votre message" placeholder="Tapez ici votre message" type="text" name="text" id="text_feed" value={inputMessage} onChange={handleChangeMessage}></input>
            </div>
            <button onClick={handleClick} className="publication_button_send" title="Cliquez pour afficher votre message">Publier le commentaire</button>
        </div>
    );
}

export default CommentsPublisher;
