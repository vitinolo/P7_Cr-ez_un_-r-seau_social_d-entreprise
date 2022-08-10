import "../styles/header.css"
import logo from '../assets/icon-left-font.svg'

 function Header () {
    return ( 
        <div className="header">
            <div className='logo'><img src={logo} alt='groupomania'/></div>
            <span className="titre">Bienvenu dans votre réseau d'entreprise !</span> 
        </div>  
    )
}
 
export default Header
