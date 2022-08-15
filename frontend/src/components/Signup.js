import React, { Component, useEffect } from 'react';
import "../styles/connexsignup.css";
import axios from "axios";

class Signup extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputEmail :"",
            inputPassword : "",
            inputFirstName : "",
            inputLastName : ""    
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e) {
        e.preventDefault();
        const postData = () => {
            axios
            .post('http://localhost:3000/api/auth/signup')
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
        };
        useEffect=(() =>{
            postData();
        }, []);
        postData();
    
    }
    
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

    render() {
        return (
            <div className="signup">
                <h2>Inscription</h2>
                <div className="form">
                    <form method="post" className='form-signup' id='myform'>
                        <div className='form__question'>
                            <input placeholder='Email' type="email" name="email" id="email" required value={this.state.inputEmail} onChange={this.handleChangeEmail}/>
                        </div>
                        <div className='form__question'>
                            <input placeholder='Mot de passe' type="password" name="password" id="password" required value={this.state.inputPassword} onChange={this.handleChangePassword}/>
                        </div>
                        <div className='form__question'>
                            <input placeholder='Prénom' type="text" name="firstname" id="firstname" required value={this.state.inputFirstName} onChange={this.handleChangeFirstName}/>
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