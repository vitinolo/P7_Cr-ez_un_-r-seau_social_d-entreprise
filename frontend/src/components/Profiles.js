import "../styles/style.css";
import Profile from "./Profile";
import axios from "axios";
import React, { useEffect } from 'react';

//récupèrer les users
const Profiles = ({post}) => { 
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
          <Profile key={index} user={user} /> ))}
        </div>
      </>
    );
}

export default Profiles;