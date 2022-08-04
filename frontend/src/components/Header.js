import '../styles/header.css'
import logo from '../assets/icon-left-font.png'

function Header(){
    return  <div className="slf">
                <img src={logo} alt='groupomania' className='slf-logo' />
                <button className='btsignup button'>Signup</button>
                <button className='btlogin button'>Login</button>
            </div>
}

export default Header