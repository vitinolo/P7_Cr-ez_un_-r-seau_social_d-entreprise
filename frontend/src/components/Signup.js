import '../styles/signup.css'
import BtnSend from'./BtnSend'
import { useState } from 'react'

const Signup =()=> {
    const [setInputValue] = useState()
    return (
        <div className="signup">
            <h1><span className="sign">Inscription</span></h1>
            <div className="signup-form">
                <form>
                    <label>
                        Email :<input onChange={(e) => setInputValue(e.target.value)} type="text" name="email" />
                    </label>
                </form>
                <form>
                    <label>
                        Mot de passe :<input onChange={(e) => setInputValue(e.target.value)} type="text" name="lastname" />
                    </label>
                </form>
                <form>
                    <label>
                        Prenom :<input onChange={(e) => setInputValue(e.target.value)} type="text" name="name" />
                    </label>
                </form>
                <form>
                    <label>
                        Nom :<input onChange={(e) => setInputValue(e.target.value)} type="text" name="lastname" />
                    </label>
                </form>
            </div>
            <BtnSend />
        </div>
    )
}

export default Signup
