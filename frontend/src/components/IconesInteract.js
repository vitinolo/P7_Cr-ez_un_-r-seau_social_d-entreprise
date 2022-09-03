import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTrash, faPen, faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const IconesInteract = () => {
    return (
        <div className="iconesInteract">
            <div className="modifyAndRemovePost">
                <button className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
                <button className="icone-comment icone"><FontAwesomeIcon icon={faComment} /></button>
                <button className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
            </div>
            <div className="vote_publication">
                <span className="icone-like icone"><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className="icone-dislike icone"><FontAwesomeIcon icon={faThumbsDown} /></span>
            </div>
        </div>
    )
}
export default IconesInteract;