import "../styles/style.css";
//import ProfileComment from "../components/ProfileComment";
//import IconesInteract from "./IconesInteract";

const Comment = ({post,user}) => { 
        /*let userId;
        userId = localStorage.getItem("userId", userId);
        const userAuthorized = user.admin === true || userId === post.userId;*/
        return (
                <>
                <div className="comment" >     
                        <>
                        <h3 className="comment-post">Commentaire de :</h3>
                        {/*<ProfileComment user={user}/>*/}
                        <div className="comments" >
                                <div >
                                        <img className="img_comment" src="" alt=""/>
                                        <p className="texte_publication_comment"></p> 
                                </div>  
                        </div>
                        {/*{userAuthorized &&
                        <IconesInteract post ={post}/>
                        }*/}
                        </>
                </div>                      
                </>       
        );
}

export default Comment