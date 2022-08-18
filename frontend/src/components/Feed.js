import "../styles/style.css";

function Feed() {
  return (
    <div className="feed_publication">
        <div className="profile">
            <div className="profile_img"></div>
            <span className="profile_name">marcello</span>
            <span className="date_edition">08/09/2002</span>
        </div>
        <div className="img_publication">

        </div>
        <div className="texte_publication">
          ça va bien ?
        </div>
        <div className="vote_publication">
          <div className="like">like<img src="" alt=""/></div>
          <div className="dislike">dislike<img src="" alt=""/></div>
        </div>
        <div className="comments_publication">

        </div>
    </div>
      

  );
}

export default Feed;
