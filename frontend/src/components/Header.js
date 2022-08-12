import "../styles/header.css"
import logo from '../assets/icon-left-font.svg'

 function Header () {
    return ( 
        <div className="header">
            <div className="head">
                <div className='logo'><img src={logo} alt='groupomania'/></div>
                <span className='inscription'><a href="/inscription" target="_blank" title="Cliquez vers l'inscription">S'inscrire</a></span>
                <span className='connexion'><a href="/connexion" target="_blank" title="Cliquez vers la connexion">Se connecter</a></span>
            </div>
            <span className="titre">Bienvenu dans votre réseau d'entreprise !</span> 
        </div>  
    )
}
 
export default Header
