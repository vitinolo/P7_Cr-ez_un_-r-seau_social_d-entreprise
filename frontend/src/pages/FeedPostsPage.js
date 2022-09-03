
import HeaderPosts from "../components/HeaderPosts"
import FeedsPublisher from "../components/FeedsPublisher"
import Feeds from "../components/Feeds"
import CommentsPublisher from "../components/CommentsPublisher"

function FeedPostsPage () {
    return(
    <div className="feedposts">
        <HeaderPosts />
        <FeedsPublisher />
        <Feeds /> 
        <CommentsPublisher />         
    </div>
    )
}
export default FeedPostsPage