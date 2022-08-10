import '../styles/signup.css'
import BtnSend from'./BtnSend'
import { useState } from 'react'

const Signup =()=> {
    const [setInputValue] = useState()
    return (
        <div className="signup">
            <h2>Inscription</h2>
            <div className="form">
                <form className='form-signup'>
                    <label className='form-label'>
                        <input placeholder ='Email' onChange={(e) => setInputValue(e.target.value)} type="email" name="email" id="email" />
                    </label>
                </form>
                <form className='form-signup'>
                    <label className='form-label'>
                        <input placeholder ='Password' onChange={(e) => setInputValue(e.target.value)} type="text" name="password" id="password" />
                    </label>
                </form>
                <form className='form-signup'>
                    <label className='form-label'>
                        <input placeholder ='Name' onChange={(e) => setInputValue(e.target.value)} type="text" name="name" id="name" />
                    </label>
                </form>
                <form className='form-signup'>
                    <label className='form-label'>
                        <input placeholder ='Lastname' onChange={(e) => setInputValue(e.target.value)} type="text" name="lastname" />
                    </label>
                </form>
            </div>
            <BtnSend />
        </div>
    )
}

export default Signup
