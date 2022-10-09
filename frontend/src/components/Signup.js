
import React, { useState } from 'react';
import "../styles/style.css";
import axios from "axios";

function Signup () {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputFirstName, setInputFirstName] = useState("")
    const [inputLastName, setInputLastName] = useState("")

    function handleClick (e) {
        handleSubmit(e)
    }
    function handleSubmit (e) {
        e.preventDefault()
        function postData() {
            return axios
            .post('http://localhost:3001/api/auth/signup',{
                email: inputEmail,
                password: inputPassword,
                name: inputFirstName,
                lastname: inputLastName,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }
        postData();

        //on réinitialise le formulaire après l'envoi
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';   
    } 
    function handleChangeEmail (e) {
        setInputEmail(e.target.value)
    }
    function handleChangePassword (e) {  
        setInputPassword (e.target.value)
        
    }
    function handleChangeFirstName (e) {
        setInputFirstName(e.target.value)
    }
    function handleChangeLastName (e) {  
        setInputLastName (e.target.value)   
    }

    return (
        <div className="signup">
            <h2>Inscription</h2>
            <div className="form">
                <form onSubmit={handleSubmit} method="post" className='form-signup' id='myform'>
                    <div className='form__question'>
                        <input placeholder='Email' type="email" name="email" id="email" required value={inputEmail} onChange={handleChangeEmail}/>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Mot de passe' type="password" name="password" id="password" required value={inputPassword} onChange={handleChangePassword}/>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Prénom' type="text" name="name" id="firstname" required value={inputFirstName} onChange={handleChangeFirstName}/>
                    </div>
                    <div className='form__question'>    
                        <input placeholder='Nom' type="text" name="lastname" id ="lastname" required value={inputLastName} onChange={handleChangeLastName}/>
                    </div>
                    <div className="form__submit">
                        <input onClick={handleClick} type="submit" value="Envoyer" id="order"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;