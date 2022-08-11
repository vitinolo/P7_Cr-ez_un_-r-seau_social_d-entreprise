import '../styles/signup.css'
import { useState } from 'react'

const Signup =()=> {
    const [setInputValue] = useState()
    return (
        <div className="signup">
            <h2>Inscription</h2>
            <div className="form">
                <form method="get" className='form-signup'>
                    <div className='form__question'>
                        <input placeholder ='Email' onChange={(e) => setInputValue(e.target.value)} type="email" contain="@" name="email" id="email" required />
                        <p id="emailErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder ='Password' onChange={(e) => setInputValue(e.target.value)} type="text" maxlength="10" name="password" id="password" required/>
                        <p id="passwordErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder ='Name' onChange={(e) => setInputValue(e.target.value)} type="text" minlength="2" name="name" id="name" required/>
                        <p id="nameErrorMsg"></p>
                    </div>
                    <div className='form__question'>
                        <input placeholder ='Lastname' onChange={(e) => setInputValue(e.target.value)} type="text" minlength="2" name="lastname" required/>
                        <p id="lastnameErrorMsg"></p>
                    </div>
                    <div className="form__submit">
                        <input type="submit" value="Envoyer" id="order"/>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Signup

