import "../styles/style.css"
import logo from '../assets/icon-left-font.svg'
import { Link } from "react-router-dom"

 function HeaderPosts1 () {
    function handleClick (e) {
        localStorage.clear();
    }

     return ( 
         <div className="bigheader">
            <div className="headposts">
                <div className='logoposts'><img src={logo} alt='groupomania'/></div>
                <span className='deconnexion1'><Link to ="/" onClick={handleClick} title="Cliquer pour vous déconnecter">Se déconnecter</Link></span>
            </div>
            <span className="titreposts">Bienvenu dans votre réseau social d'entreprise !</span> 
        </div>  
    )
}
 
export default HeaderPosts1;
