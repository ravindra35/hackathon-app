import moment from "moment/moment";
import { useState } from "react";
import settingsService from "../../redux/service";
import ActionContainer from "./ActionContainer";
import CommentContainer from "./CommentContainer";

const FeedTile = (props) => {
  const [postItem, setPostItem] = useState(props?.item);
  console.log(props);
  //props?.fetchPost using post Id

  const postById =  (dataItem) => {
    setPostItem(dataItem)
  };
const publishedDate=moment(postItem?.createdAt).format("MMMM,D YYYY hh:mm A")
console.log(publishedDate)
  return (
    <div className="central-meta item">
      <div className="user-post">
        <div className="friend-info">
          <figure>
            <img src="images/resources/friend-avatar10.jpg" alt="" />
          </figure>
          <div className="friend-name">
            <ins>
              <a href="time-line.html" title="">
                {`${postItem?.profile?.firstName} ${postItem?.profile?.lastName}`}
              </a>
            </ins>
            <span>published: {publishedDate}</span>
          </div>
          <div className="post-meta">
            <div className="description">
              <p>{postItem?.description}</p>
            </div>
            {postItem?.mediaType === "Image" && (
              <>
                <img src={postItem?.mediaUrl} />
              </>
            )}
            {postItem?.mediaType === "Video" && (
              <>
                <video width="100%" controls>
                  <source src={postItem?.mediaUrl} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </>
            )}
            {postItem?.mediaType === "Document" && (
              <>
                <iframe src={postItem?.mediaUrl} />
              </>
            )}
            <ActionContainer postItem={postItem} postById={postById} />
          </div>
        </div>
        <CommentContainer
          postId={postItem?.postId}
          comments={postItem?.comments}
          postById={postById}
        />
      </div>
    </div>
  );
};

export default FeedTile;
