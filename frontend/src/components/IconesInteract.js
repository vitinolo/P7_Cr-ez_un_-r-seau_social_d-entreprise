import axios from "axios";
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

let id = recupId();
const IconesInteract = () => {
    function handleClickRemove (e) {
        HandleSubmitRemove(e)
    }
    function handleClickModify (e) {
        HandleSubmitModify(e)
    }
    function HandleSubmitRemove (e) {
        e.preventDefault()
            useEffect(() => {
                axios
                .delete('http://localhost:3001/api/posts/'+ id,{
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
                })
                .then((res) => console.log(res))
            },[]);
    }
    function HandleSubmitModify (e) {
        e.preventDefault()
            useEffect(() => {
                axios
                .put('http://localhost:3001/api/posts/' + id,{
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
            <button onClick={handleClickRemove} className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={handleClickModify} className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
        </div>        
    </div>
    )
}

function recupId () 
{
  let queryStringUrlId = window.location.search;
  let urlSearchParams = new URLSearchParams(queryStringUrlId);
  return urlSearchParams.get('id');   
}
export default IconesInteract;

