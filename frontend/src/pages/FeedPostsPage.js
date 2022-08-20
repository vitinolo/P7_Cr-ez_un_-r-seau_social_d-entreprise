
import HeaderPosts from "../components/HeaderPosts"
import FeedsPublisher from "../components/FeedsPublisher"
import Feed from "../components/Feed"

function FeedPostsPage () {
    return(
    <div className="feedposts">
        <HeaderPosts />
        <FeedsPublisher />
        <Feed />          
    </div>
    )
}
export default FeedPostsPage