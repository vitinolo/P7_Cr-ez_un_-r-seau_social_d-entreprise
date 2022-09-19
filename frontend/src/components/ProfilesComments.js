import "../styles/style.css";
import ProfileComment from "./ProfileComment";
import axios from "axios";
import React, { useEffect } from 'react';

//récupèrer les users
const ProfilesComments = () => { 
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3001/api/users',{
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      }
    })
    .then((res) => setData(res.data))  
  },[]);

    return (
      <>
        <div className="profiles">{data.map((user, index) => (
          <ProfileComment key={index} user={user} /> ))}
        </div>
      </>
    );
}

export default ProfilesComments;