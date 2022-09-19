import axios from "axios";
import {useParams} from "react-router-dom";
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const IconesInteract = () => {
    const {id} = useParams();

    function handleClickModify () {
        Modify();
    }
    function handleClickRemove () {
        Remove();
    }
    function Remove () {
            useEffect(() => {
                axios
                .delete('http://localhost:3001/api/posts/'+ {id},{
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
                })
                .then((res) => console.log(res))
            },[]);
    }
    function Modify () {
            useEffect(() => {
                axios
                .put('http://localhost:3001/api/posts/' + {id},{
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
                })
                .then((res) => console.log(res))
            },[]);
    }

    return (
    <div className="iconesInteract">
        <div className="modifyAndRemovePost">
            <button onClick={handleClickRemove}  className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={handleClickModify}  className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
        </div>        
    </div>
    )
}

export default IconesInteract;

