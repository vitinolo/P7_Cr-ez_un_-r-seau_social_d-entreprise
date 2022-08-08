import "../styles/btnSend.css"
const BtnSend =() =>{
return  <div className="btnSend" onClick={sendToLocalStorage} >
            <button><span className="BtnSendForm">Envoyer</span></button>
        </div>
}
function sendToLocalStorage() {
    console.log('✨ Données transmises ! ✨')
}

export default BtnSend