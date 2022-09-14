import "../styles/style.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';


//afficher le profil
const Profile = (post) => { 
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:3001/api/users',{
          headers:{
            'Authorization': 'Bearer '+ localStorage.getItem("token")
          }     
        })
        .then((data) => setData(data))  
      },[]);
      
      console.log(data,"cecrrv")
    return (
        <div className="profile">
            <span className="profile_firstname">{data.name} </span>
            <span className="profile_lastname"> {data.lastname} </span>
            <span className="created_at">créé le:{post.created_at}</span>
        </div>
    );
}

export default Profile;