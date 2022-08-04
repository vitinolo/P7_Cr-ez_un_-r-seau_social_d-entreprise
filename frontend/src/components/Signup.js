import '../styles/signup.css'

const Signup =()=> {
    return (
        <div className="signup">
            <h1><span className="sign">Inscription</span></h1>
            <div className="signup-form">
                <form>
                    <label>
                        Email :<input type="text" name="email" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
                <form>
                    <label>
                        Mot de passe :<input type="text" name="lastname" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
                <form>
                    <label>
                        Prenom :<input type="text" name="name" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
                <form>
                    <label>
                        Nom :<input type="text" name="lastname" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    )
}

export default Signup;