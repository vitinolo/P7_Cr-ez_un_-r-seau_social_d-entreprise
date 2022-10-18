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
            .post('auth/signup',{
                email: inputEmail,
                password: inputPassword,
                name: inputFirstName,
                lastname: inputLastName,
            })
            .then((res) => {
                return alert(res.data.message);
            })
            .catch(() => {   
                return alert("Mot de passse trop faible: il faut 8 caractères dont 1 majuscule et 2 chiffres");
            });
        }
        postData();
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
            <h2 className='h2-texte'>Inscription</h2>
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