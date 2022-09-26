//import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = () => {
    /* const id = post._id;
   
    function remove () {
        axios
            .delete(`http://localhost:3001/api/posts/${id}`,{},{
                headers:{
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                }
            })
            .then((res) => {
               
            })
            .catch((err) => console.log(err));
            
    }
    remove();
         
    */
    return (

        <button /*onClick={() => remove()}*/  className="icone-remove icone"><FontAwesomeIcon icon={faTrash} /></button>
    )
}
export default RemoveButton;