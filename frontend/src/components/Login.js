import '../styles/login.css'
import BtnSend from'./BtnSend'

const Login =()=> {
    return (
        <div className="login">
            <h1><span className="log">Se connecter</span></h1>
            <div className="login-form">
                <form>
                    <label>
                        Email :<input type="text" name="email" />
                    </label>
                </form>
                <form>
                    <label>
                        Mot de passe :<input type="text" name="password" />
                    </label>
                </form>
            </div>
            <BtnSend />
        </div>
    )
}

export default Login;