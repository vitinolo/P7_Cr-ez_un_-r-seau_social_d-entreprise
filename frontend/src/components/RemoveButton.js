import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = ({post, posts, setPosts}) => {
    
    const id = post._id;
    const token = localStorage.getItem("token")
    
    function remove () {
        axios
            .delete(`http://localhost:3001/api/posts/${id}`,{
                headers:{
                    'Authorization': `Bearer ${token}`  
                }
            })
            .then(function(res)  {
                console.log( posts)
                posts=[...posts]
                const index= posts.findIndex(post)
                setPosts= posts.splice[index]
                console.log(index._id)
                ///window.location.reload(true);
            })
            .catch((err) => console.log(err));  
    }
    
    return (

        <button onClick={() => remove()} title="Supprimer la publication" className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
    )
}
export default RemoveButton;