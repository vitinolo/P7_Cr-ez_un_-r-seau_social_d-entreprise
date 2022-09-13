import "../styles/header.css"
import logo from '../assets/icon-left-font.svg'
import { Link } from "react-router-dom"

 function HeaderPosts () {
    function handleClick (e) {
        localStorage.clear();
    }
     return ( 
         <div className="bigheader">
            <div className="headerposts">
                <div className="headposts">
                    <div className='logoposts'><img src={logo} alt='groupomania'/>
                    </div>
                    <span className='deconnexion'><Link to ="/" onClick={handleClick} title="Cliquez pour vous déconnecter">Se déconnecter</Link></span>
                </div>
            </div>
            <span className="titreposts">Bienvenu dans votre réseau social d'entreprise !</span> 
        </div>  
    )
}
 
export default HeaderPosts;
