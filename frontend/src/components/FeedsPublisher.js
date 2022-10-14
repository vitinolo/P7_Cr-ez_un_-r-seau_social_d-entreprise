import React, { useState } from 'react';
import "../styles/style.css";
import axios from "axios";

function FeedsPublisher({setPosts}) {
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
        if(image){
          form.append("image", file, image);
          
        }
        form.append("userId", userId);
        if(inputMessage){
          form.append("body", inputMessage);

        }
      
        return axios
        .post('http://localhost:3001/api/posts', form,{
          headers:{
            'Authorization': 'Bearer '+ localStorage.getItem("token")
          }
        })
        .then( function(res){
          setPosts(posts => [...posts, res.data.post])    
        })
        .catch((err) => alert(err ="mettre une image et/ou un texte !"))   
      }
        postData();    
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
