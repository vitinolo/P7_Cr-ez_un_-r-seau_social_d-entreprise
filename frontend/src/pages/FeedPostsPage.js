
import HeaderPosts from "../components/HeaderPosts"
import FeedsPub from "../components/FeedsPub"
import Feed from "../components/Feed"

function FeedPostsPage () {
    return(
    <div className="feedposts">
        <HeaderPosts />
        <FeedsPub />
        <Feed />
            
    </div>
    )
}
export default FeedPostsPage