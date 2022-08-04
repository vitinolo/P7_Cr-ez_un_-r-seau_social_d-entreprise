import '../styles/login.css'

const Login =()=> {
    return (
        <div className="login">
            <h1><span className="log">Se connecter</span></h1>
            <div className="login-form">
            <form>
                <label>
                    Email :<input type="text" name="email" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
            <form>
                <label>
                    Mot de passe :<input type="text" name="password" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
            </div>
        </div>
    )
}

export default Login;