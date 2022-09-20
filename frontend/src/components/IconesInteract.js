import axios from "axios";
//import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const IconesInteract = ({post}) => {
    const id = post._id;
    //const [posted, setPosted] = useState();
    
    function remove () {
        axios
            .delete(`http://localhost:3001/api/posts/${id}`,{
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
            })
            .then((res) => (
                //setPosted(res.data.post),
                console.log("click")
                ))       
    }

    return (
    <div className="iconesInteract">
        <div className="modifyAndRemovePost">
            <button onClick={() => remove()}  className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
            <button className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
        </div>        
    </div>
    )
}

export default IconesInteract;

