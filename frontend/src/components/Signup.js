import '../styles/signup.css'
import { useState } from 'react'

const Signup =()=> {
    const [inputValue, setInputValue] = useState()
    return (
        <div className="signup">
            <h2>Inscription</h2>
            <div className="form">
                <form method="post" className='form-signup' id='myform' value={inputValue} onChange={(e) => setInputValue(e.target.value)} >
                    <div className='form__question'>
                        <input placeholder='Email' type="email" name="email" id="email" required />
                        <p id="emailErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Mot de passe' type="text" name="password" id="password" required/>
                        <p id="passwordErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Prénom' type="text" name="firstname" id="firstname" required/>
                        <p id="firstnameErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Nom' type="text" name="lastname" id ="lastname" required/>
                        <p id="lastnameErrorMsg"></p>
                    </div>
                    <div className="form__submit">
                        <input onClick={()=>alert(setInputValue)} type="submit" value="Envoyer" id="order"/>
                    </div>
                </form>
            </div>
        </div>
    )
};

function formValidation (){
    let myForm = document.getElementById('myform');
    return(  
        
        myForm.onChange('myform', function(e){
            
            //validation champs email
            let myInputEmail = document.getElementById('email');
            let myRegexEmail = /^[a-zA-Z-\s]+$/;
        
            if(myInputEmail.value.trim() === ""){
                let myError = document.getElementById('emailErrorMsg');
                myError.innerHTML ="le champs email doit être rempli";
                myError.style.color ='red';
                e.preventDefault();
                return;
                
            }else if(myRegexEmail.test(myInputEmail) === false){
                let myError = document.getElementById('emailErrorMsg');
                myError.innerHTML ="le champs email doit être rempli";
                myError.style.color ='red';
                e.preventDefault();
                return;
            }   
            //validation champs nom
             let myInputLastName = document.getElementById('lastname');
             let myRegexLastName = /^[a-zA-Z-\s]+$/;
         
             if(myInputLastName.value.trim() === ""){
                 let myError = document.getElementById('lastnameErrorMsg');
                 myError.innerHTML ="le champs nom doit être rempli";
                 myError.style.color ='red';
                 e.preventDefault();
                 return;
             }else if(myRegexLastName.test(myInputLastName) === false){
                 let myError = document.getElementById('lastnameErrorMsg');
                 myError.innerHTML ="le champs nom doit être rempli";
                 myError.style.color ='red';
                 e.preventDefault();
                 return;
             }   
            //validation champs prénom
            let myInputFirstName = document.getElementById('firstname');
            let myRegexFirstName = /^[a-zA-Z-\s]+$/;
        
            if(myInputFirstName.value.trim() === ""){
                let myError = document.getElementById('firstnameErrorMsg');
                myError.innerHTML ="le champs prénom doit être rempli";
                myError.style.color ='red';
                e.preventDefault();
                return;
            }else if(myRegexFirstName.test(myInputFirstName) === false){
                let myError = document.getElementById('firstnameErrorMsg');
                myError.innerHTML ="le champs prénom doit être rempli";
                myError.style.color ='red';
                e.preventDefault();
                return;
            }   
            //validation champs password
            let myInputPassword = document.getElementById('password');
            let myRegexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
        
            if(myInputPassword.value.trim() === ""){
                let myError = document.getElementById('passwordErrorMsg');
                myError.innerHTML ="le champs mot de passe doit être rempli";
                myError.style.color ='red';
                e.preventDefault();
                return;
            }else if(myRegexPassword.test(myInputPassword) === false){
                let myError = document.getElementById('passwordErrorMsg');
                myError.innerHTML ="le champs mot de passe doit être rempli";
                myError.style.color ='red';
                e.preventDefault();
                return;
            }    
        })
    )
};

export default Signup;
