import "../styles/header.css"
import logo from '../assets/icon-left-font.svg'
import { Link } from "react-router-dom"
 function HeaderPosts () {
    return ( 
        <div className="header">
            <div className="head">
                <div className='logo'><img src={logo} alt='groupomania'/></div>
                <span className='connexion'><Link to ="/" target="_blank" title="Cliquez vers la connexion">Se déconnecter</Link></span>
            </div>
            <span className="titre">Bienvenu dans votre réseau d'entreprise !</span> 
        </div>  
    )
}
 
export default HeaderPosts;
