import "../styles/style.css";

function FeedsPublisher() {
  return (
    <div className="feeds_publication">
      <span className="feed_title">Publiez votre message:</span>
      <div className="feed_publication_send">
        <button className="publication_button" title="Cliquez pour ajouter une image">Ajouter une image</button>
        <input title="Cliquez puis écrire votre message"placeholder="Composez et partagez" type="text" name="text" id="text_feed"></input>
      </div>
        <button className="publication_button_send" title="Cliquez pour afficher votre message">Afficher</button>    
    </div>
  );
}

export default FeedsPublisher;
