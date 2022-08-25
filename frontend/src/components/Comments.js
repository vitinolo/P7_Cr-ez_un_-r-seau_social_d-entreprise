import "../styles/style.css";
import Comment from"./Comment";
import CommentsPublisher from "./CommentsPublisher";
function Comments() {
  return (
    <div className="comments">
      <Comment />
     <CommentsPublisher />
    </div>
  );
}

export default Comments;
