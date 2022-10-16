import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = ({post, posts, setPosts}) => {
    const id = post._id;

    function remove () {
        axios
            .delete(`posts/${id}`)
            .then(res =>  {
                console.log( posts)
                const postsCopy =[...posts]
                const index = postsCopy.findIndex(p => p._id === id);
                postsCopy.splice(index, 1);
                setPosts(postsCopy);
                alert(res.data.message);
            })
            .catch((err) => console.log(err));  
    }
    
    return (

        <button onClick={remove} title="Supprimer la publication" className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
    )
}
export default RemoveButton;