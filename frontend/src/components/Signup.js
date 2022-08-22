import React, { Component } from 'react';
import "../styles/style.css";
import axios from "axios";

//on construit le composant
class Signup extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputEmail :"",
            inputPassword : "",
            inputFirstName : "",
            inputLastName : ""    
        };
        //on bind les chgts
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //au click du bouton (handleClick) on envoie les données au serveur (axios, handleSubmit) 
    handleClick(e){
        this.handleSubmit(e)
    }

    handleSubmit(e) {
       e.preventDefault();
        const data = this.state
        console.log(data)
        function postData (data){
            axios
            .post('http://localhost:3001/api/auth/signup',{
                email: data.inputEmail,
                password: data.inputPassword,
                name: data.inputFirstName,
                lastname: data.inputLastName,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }
        postData(data);
        //on réinitialise le formulaire après l'envoi
        this.setState({
            inputEmail :"",
            inputPassword : "",
            inputFirstName : "",
            inputLastName : ""    
        })
    } 
    
    //on set le state de l'email,password,name et lastname
    handleChangeEmail(e) {
        console.log(e.target.value)
        this.setState(() => ({
            inputEmail : e.target.value
        }))
    }
    handleChangePassword(e) {
        console.log(e.target.value)
        this.setState(() => ({
            inputPassword : e.target.value
        }))
    }
    handleChangeFirstName(e) {
        console.log(e.target.value)
        this.setState(() => ({
            inputFirstName : e.target.value
        }))
    }
    handleChangeLastName(e) {
        console.log(e.target.value)
        this.setState(() => ({
            inputLastName : e.target.value
        }))
    }
    // on renvoie
    render() {
        return (
            <div className="signup">
                <h2>Inscription</h2>
                <div className="form">
                    <form onSubmit={this.handleSubmit} method="post" className='form-signup' id='myform'>
                        <div className='form__question'>
                            <input placeholder='Email' type="email" name="email" id="email" required value={this.state.inputEmail} onChange={this.handleChangeEmail}/>
                        </div>
                        <div className='form__question'>
                            <input placeholder='Mot de passe' type="password" name="password" id="password" required value={this.state.inputPassword} onChange={this.handleChangePassword}/>
                        </div>
                        <div className='form__question'>
                            <input placeholder='Prénom' type="text" name="name" id="firstname" required value={this.state.inputFirstName} onChange={this.handleChangeFirstName}/>
                        </div>
                        <div className='form__question'>    
                            <input placeholder='Nom' type="text" name="lastname" id ="lastname" required value={this.state.inputLastName} onChange={this.handleChangeLastName}/>
                        </div>
                        <div className="form__submit">
                            <input onClick={this.handleClick} type="submit" value="Envoyer" id="order"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;