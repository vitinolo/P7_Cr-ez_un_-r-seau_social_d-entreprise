import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = ({post}) => {
    
     const id = post._id;
     const token = localStorage.getItem("token")
    
    function remove () {
        axios
            .delete(`http://localhost:3001/api/posts/${id}`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                   
                }
            })
            .then((res) => {
                window.location.reload(true);
            })
            .catch((err) => console.log(err));
            
        }
    
    return (

        <button onClick={() => remove()} className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
    )
}
export default RemoveButton;