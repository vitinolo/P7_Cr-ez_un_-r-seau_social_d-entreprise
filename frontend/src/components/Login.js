import '../styles/login.css'
import './Signup'

const Login =()=> {
    return (
        <div className="login">
            <h2>Se connecter</h2>
            <div className="form">
                <form method="get" className='form-login'>
                    <div className="form__question">
                        <input placeholder='Email' type="text" name="email" id="email"/>
                        <p id="emailErrorMsg"></p>
                    </div>
                    <div className="form__question">
                        <input placeholder='Password' type="text" name="password" id="password"/>
                        <p id="passwordErrorMsg"></p>
                    </div>
                    <div className="form__submit">
                        <input type="submit" value="Envoyer" id="order"/>
                    </div>
                </form>
            </div>
            <span className='inscription'><a href="/inscription">S'inscrire</a></span>
        </div>
    )
}

export default Login;