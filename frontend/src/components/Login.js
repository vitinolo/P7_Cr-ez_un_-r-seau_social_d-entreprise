import '../styles/login.css'
import './Signup'
import BtnSend from'./BtnSend'

const Login =()=> {
    return (
        <div className="login">
            <h2>Se connecter</h2>
            <div className="form">
                <form className='form-login'>
                    <label>
                        <input placeholder='Email' type="text" name="email" id="email" />
                    </label>
                </form>
                <form className='form-login'>
                    <label>
                        <input placeholder='Password' type="text" name="password" id="password"/>
                    </label>
                </form>
            </div>
            <BtnSend />
            <span className='inscription'><a href="/inscription">S'inscrire</a></span>
        </div>
    )
}

export default Login;