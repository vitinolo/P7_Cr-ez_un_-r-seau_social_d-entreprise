import "../styles/header.css"
import logo from '../assets/icon-left-font.svg'
import { Link, useNavigate } from "react-router-dom"

 function HeaderPosts () {
    let navigate = useNavigate();
    function handleClick (e) {
        localStorage.clear();
    }
    function retour() {
        navigate('/Feed');
    }
     return ( 
         <div className="bigheader">
            <div className="headposts">
                <div className='logoposts'><img src={logo} alt='groupomania'/></div>
                <span className='deconnexion'><Link to ="/" onClick={handleClick} title="Cliquez pour vous déconnecter">Se déconnecter</Link></span>
                <span className='accueil'><Link to ="/Feed" onClick={retour} title="retour">Retour</Link></span>
            </div>
            <span className="titreposts">Bienvenu dans votre réseau social d'entreprise !</span> 
        </div>  
    )
}
 
export default HeaderPosts;
