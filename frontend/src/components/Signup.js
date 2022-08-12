import '../styles/signup.css'
//import { useState } from 'react'

const Signup =()=> {
    return (
        <div className="signup">
            <h2>Inscription</h2>
            <div className="form">
                <form method="get" className='form-signup' >
                    <div className='form__question'>
                        <input placeholder='Email' type="email" name="email" id="email" required />
                        <p id="emailErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Mot de passe' type="text" name="password" id="password" required/>
                        <p id="passwordErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Prénom' type="text" name="name" id="name" required/>
                        <p id="nameErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder='Nom' type="text" name="lastname" id ="lastname" required/>
                        <p id="lastnameErrorMsg"></p>
                    </div>
                    <div className="form__submit">
                        <input type="submit" value="Envoyer" id="order"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

/*
listenFormSubmit()
listenForFormChange();

function listenForFormChange() 
{   
    //écouter champ prénom 
    document.getElementById('name').addEventListener('input', () => 
    {
        hideError('firstNameErrorMsg'); 
        if (!isFirstNameValid())
        {
            showError('firstNameErrorMsg', 'Merci de bien remplir le champ prénom');   
        }
    })
    
    //écouter champ nom
    document.getElementById('lastName').addEventListener('input', () => 
    {
        hideError('lastNameErrorMsg');  
        if (!isLastNameValid())
        {
            showError('lastNameErrorMsg', 'Merci de bien remplir le champ nom');
        } 
    })
    
    //écouter champ email
    document.getElementById('email').addEventListener('input', () => 
    { 
        hideError('emailErrorMsg');  
        if (!isEmailValid()) 
        {
            showError('emailErrorMsg', 'Merci de bien remplir le champ email');
        }  
    })

    //écouter champ mot de passe
    document.getElementById('password').addEventListener('input', () => 
    { 
        hideError('emailErrorMsg');  
        if (!isEmailValid()) 
        {
            showError('emailErrorMsg', 'Merci de bien remplir le champ mot de passe');
        }  
    })
}
function listenFormSubmit()
{
    //écoute du bouton envoyer
    document.getElementById('order').addEventListener('click', (e) =>
    {  
        e.preventDefault();
        
        hideError('firstNameErrorMsg'); 
        hideError('lastNameErrorMsg');  
        hideError('addressErrorMsg');  
        hideError('cityErrorMsg');  
        hideError('emailErrorMsg'); 
        
        if (!isFirstNameValid())
        {
            showError('firstNameErrorMsg', 'Merci de bien remplir le champ prénom');
            return;   
        }
        
        if (!isLastNameValid())
        {
            showError('lastNameErrorMsg', 'Merci de bien remplir le champ nom');
            return;
        } 

        
        if (!isEmailValid()) 
        {
            showError('emailErrorMsg', 'Merci de bien remplir le champ email');
            return;
        }  
        
        //récupèration des id
        const products = JSON.parse(localStorage.getItem('products'));
        let productIds = [];
        products.forEach(product => { productIds.push(product.id) })
    });
}
function hideError(id)
{
    document.getElementById(id).innerText = ''; 
}
function isEmailValid()
{
    const email = document.getElementById('email').value;

    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
function isFirstNameValid()
{
    const firstName = document.getElementById('firstName').value;

    if(firstName.length < 2 || !validateNoun(firstName))
    {
        return false
    }
    return true;
}
function isLastNameValid()
{
    const lastName = document.getElementById('lastName').value;

    if(lastName.length < 2 || !validateNoun(lastName))
    {
        return false
    }
    return true;
}
function showError(id,text)
{
    document.getElementById(id).innerText = text;   
}

function validateNoun(value)
{
    return String(value)
    .toLowerCase()
    .match(
    /^[A-Za-z\5-]+$/
    );
}
*/
export default Signup

