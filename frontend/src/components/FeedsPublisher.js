import "../styles/style.css";

function FeedsPublisher() {
  return (
    <div className="feeds">
      <span className="feed_title">Publiez votre message:</span>
      <div className="feed_publication_send">
        <button className="publication_button" target="_blank" title="Cliquez pour ajouter une image">Ajouter une image</button>
        <input target="_blank" title="Cliquez puis écrire votre message"placeholder="Composez et partagez" type="text" name="text" id="text_feed"></input>
      </div>
        <button className="publication_button_send" target="_blank" title="Cliquez pour afficher votre message">Afficher</button>    
    </div>
  );
}

export default FeedsPublisher;
