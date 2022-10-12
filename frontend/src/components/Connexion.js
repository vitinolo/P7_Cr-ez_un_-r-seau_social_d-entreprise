import React, { useState } from 'react';
import "../styles/style.css";
import { Link, useNavigate }  from "react-router-dom";
import axios from "axios";

function Connexion(props) {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    let navigate = useNavigate();
    //au click du bouton (handleClick) on envoie les données au serveur (axios, handleSubmit) 
    function handleClick (e) {
       handleSubmit(e)
    }
    function handleSubmit (e) {
        e.preventDefault()
        function postData() {
            return axios
            .post('http://localhost:3001/api/auth/login',{
                email: inputEmail,
                password: inputPassword,
            })
            // mettre le token et le userId dans le localStorage
            .then(function (res){
                const token = res.data.token;
                const userId = res.data.userId;
                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId);
                navigate('/Feed');
            })
            .catch((err) => alert(err ="identifiant ou mot de passe inconnut !"))   
        }
        postData();  
    } 
    
    // nouvelle valeur des input
    function handleChangeEmail (e) {
        setInputEmail(e.target.value)
    }
    function handleChangePassword (e) {  
        setInputPassword (e.target.value)
        
    }
    return (
        <div className="signup">
            <h2 className='h2-texte'>Se connecter</h2>
            <div className="form">
                <form onSubmit={handleSubmit} method="post" className='form-signup' id='myform'>
                    <div className='form__question'>
                        <input placeholder='Email' type="email" name="email" id="email" required value={inputEmail} onChange={handleChangeEmail}/>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Mot de passe' type="password" name="password" id="password" required value={inputPassword} onChange={handleChangePassword}/>
                    </div>
                    <div className="form__submit">
                        <input onClick={handleClick} type="submit" value="Connexion" id="order"/>
                    </div>
                </form>
            </div>
            <span className='inscription'><Link to="/inscription" title="Cliquez vers l'inscription">Inscription</Link></span>
        </div>
    );
    
}

export default Connexion;