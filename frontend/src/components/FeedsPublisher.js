import React, { useState } from 'react';
import "../styles/style.css";
import axios from "axios";

function FeedsPublisher() {
  const [inputMessage, setInputMessage] = useState("")
  const [image, setImage] = useState ("")
  const [file, setFile] = useState ("")

  function handleClick (e) {
    handleSubmit(e)
  }

  function handleSubmit (e) {
    e.preventDefault()
    function postData() {
        const userId = localStorage.getItem("userId");
        const form = new FormData();
        form.append("image", file, image);
        form.append("userId", userId);
        form.append("body", inputMessage);
      
        return axios
        .post('http://localhost:3001/api/posts', form,{
          headers:{
            'Authorization': 'Bearer '+ localStorage.getItem("token")
          }
        })
        .then( function(res){
          console.log(res)      
        })
        .catch((err) => alert(err ="mettre une image et/ou un texte !"))   
      }
        postData();
        window.location.reload(true);
        
  } 

  function handleChangeMessage (e) {
    setInputMessage(e.target.value)
  }

  function handleChangeImage (e) {
    console.log(e.target.value)
    setImage(e.target.value)
    setFile(e.target.files[0])
  }

  return (
    <div onSubmit={handleSubmit} className="feeds_publication">
      <span className="feed_title">Publier votre message:</span>
      <div className="feed_publication_send">
        <input type="file" accept=".jpg, .jpeg, .png" id="file" name="file" className="publication_file" title="Cliquez pour ajouter une image" value={image} onChange={handleChangeImage}></input>
        <input title="Cliquez puis écrire votre message" placeholder="Taper ici votre message" type="text" name="text" id="text_feed" value={inputMessage} onChange={handleChangeMessage}></input>
      </div>
      <button onClick={handleClick} className="publication_button_send" title="Cliquez pour afficher votre message">Publier l'article</button>    
    </div>
  );
}

export default FeedsPublisher;
