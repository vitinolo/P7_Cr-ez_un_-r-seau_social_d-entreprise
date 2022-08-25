import React, { Component } from 'react';
import "../styles/style.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Connexion extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputEmail :"",
            inputPassword : "",            
        };
        //on bind les chgts
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        //au click du bouton (handleClick) on envoie les données au serveur (axios, handleSubmit) 
        handleClick (e) {
            this.handleSubmit(e)
        }
        handleSubmit (e) {
            e.preventDefault();
            const data = this.state
            const userId = this.state.userId
            console.log(data)
            function postData (data){
                axios
                .post('http://localhost:3001/api/auth/login',{
                    email: data.inputEmail,
                    password: data.inputPassword,
                })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err))
            }
            postData(data);
            //on réinitialise le formulaire après l'envoi
            this.setState({
                inputEmail :"",
                inputPassword : ""    
            })
            if(userId){
                window.location.href ="http://localhost:3000/Feed";   
            } else{
                //window.location.href ="http://localhost:3000/auth/login"
                return
            }
        } 
        // nouvelle valeur des input
        handleChangeEmail (e) {
            console.log(e.target.value)
            this.setState(() => ({
                inputEmail : e.target.value
            }))
        }
        handleChangePassword (e) {
            console.log(e.target.value)
            this.setState(() => ({
                inputPassword : e.target.value
            }))
        }
        render(){
        return (
            <div className="signup">
                <h2>Se connecter</h2>
                <div className="form">
                    <form onSubmit={this.handleSubmit} method="post" className='form-signup' id='myform'>
                        <div className='form__question'>
                            <input placeholder='Email' type="email" name="email" id="email" required value={this.state.inputEmail} onChange={this.handleChangeEmail}/>
                        </div>
                        <div className='form__question'>
                            <input placeholder='Mot de passe' type="password" name="password" id="password" required value={this.state.inputPassword} onChange={this.handleChangePassword}/>
                        </div>
                        <div className="form__submit">
                            <input onClick={this.handleClick} type="submit" value="Connexion" id="order"/>
                        </div>
                    </form>
                </div>
                <span className='inscription'><Link to="/inscription" title="Cliquez vers l'inscription">Inscription</Link></span>
            </div>
        );
    }
}

export default Connexion;