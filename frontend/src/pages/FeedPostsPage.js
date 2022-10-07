import HeaderPosts from "../components/HeaderPosts";
import FeedsPublisher from "../components/FeedsPublisher"
import Feeds from "../components/Feeds";

function FeedPostsPage () {
    return(
    <div className="feedposts">
        <HeaderPosts />
        <FeedsPublisher />
        <Feeds />     
    </div>
    )
}
export default FeedPostsPage