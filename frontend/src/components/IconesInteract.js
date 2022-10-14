import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import RemoveButton from "./RemoveButton";
import ModifyPublisher from "./ModifyPublisher";

const IconesInteract = ({post, posts, setPosts}) => {
    const [visibility, setVisibility] = useState(false)

    function changeVisibility () {
        setVisibility(!visibility)
     }
    return (
        <>
            <div className="iconesInteract">
                <div className="modifyAndRemovePost">
                    {<RemoveButton post={post} posts={posts} setPosts={setPosts} />}
                    <button  onClick={changeVisibility} title="Modifier la publication" className="icone-modify icone"><FontAwesomeIcon icon={faPen} /></button>
                </div>        
            </div>
            <div>
                {visibility && <ModifyPublisher post={post} posts={posts} setPosts={setPosts} />}
            </div>
        </>
    )

    
}

export default IconesInteract;

