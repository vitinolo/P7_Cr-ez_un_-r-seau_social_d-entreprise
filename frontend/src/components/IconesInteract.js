import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const IconesInteract = () => {
    
    return (
        <div className="iconesInteract">
            <div className="modifyAndRemovePost">
                <button className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
                <button className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
            </div>        
        </div>
    )
}
export default IconesInteract;