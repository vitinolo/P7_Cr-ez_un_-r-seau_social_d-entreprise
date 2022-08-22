import React, { Component } from 'react';
import "../styles/style.css";
import { Link } from "react-router-dom"

class Connexion extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputEmail :"",
            inputPassword : "",
            inputFirstName : "",
            inputLastName : ""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        //this.handleClick = this.handleClick.bind(this)
        
    }
    /*handleClick() {
        this.setState({
          inputEmail :  "",
          inputPassword : "",
          inputFirstName : "",
          inputLastName : ""
        })
    }*/
    

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
                <h2>Se connecter</h2>
                <div className="form">
                    <form method="post" className='form-signup' id='myform'>
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