import CommentContainer from "./CommentContainer";

const FeedTile = (props) => {
  console.log(props)
  //props?.fetchPost using post Id
 
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
                Janice Griffith
              </a>
            </ins>
            <span>published: june,2 2018 19:PM</span>
          </div>
          <div className="post-meta">
            <div className="description">
              <p>{props?.item?.description}</p>
            </div>
            {props?.item?.mediaType === "Image" && (
              <>
                <img src={props?.item?.mediaUrl} />
              </>
            )}
            {props?.item?.mediaType === "Video" && (
              <>
                <video width="100%" controls>
                  <source src={props?.item?.mediaUrl} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </>
            )}
            {props?.item?.mediaType === "Document" && (
              <>
                <iframe src={props?.item?.mediaUrl} />
              </>
            )}
            {/* <img src="images/resources/user-post.jpg" alt="" /> */}
            <div className="we-video-info">
              <ul>
                <li>
                  <span
                    className="comment"
                    data-toggle="tooltip"
                    title="Comments"
                    style={{ color: "white" }}
                  >
                    <i
                      className="fa fa-comments-o"
                      style={{ color: "white" }}
                    ></i>
                    <ins>52</ins>
                  </span>
                </li>
                <li>
                  <span className="like" data-toggle="tooltip" title="like">
                    <i className="ti-heart"></i>
                    <ins>2.2k</ins>
                  </span>
                </li>
                <li>
                  <span
                    className="dislike"
                    data-toggle="tooltip"
                    title="dislike"
                  >
                    <i className="ti-heart-broken"></i>
                    <ins>200</ins>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CommentContainer postId={props?.item?.postId} comments={props?.item?.comments}/>
        {/* <div className="coment-area">
          <ul className="we-comet">
          <li className="post-comment">
              <div className="comet-avatar">
                <img src="images/resources/comet-1.jpg" alt="" />
              </div>
              <div className="post-comt-box">
                <div>
                  <textarea placeholder="Post your comment" ></textarea>
                  <Button>Submit</Button>
                </div>
              </div>
            </li>  
            {comments.slice(0, 0 + take)?.map((j) => (
              <Comments item={j} />
            ))}
            <li>
              <div className="d-flex justify-content-center align-items-center bz-services-showMore">
                <div ref={showMoreRef}>
                  {comments.length > take && (
                    <span
                      className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                      onClick={() => handlePageChange()}
                    >
                      View More
                    </span>
                  )}
                  {comments.length <= take && comments.length > 2 && (
                    <span
                      className="btn btn-link  align-baseline bz-cursor-pointer p-0 showmore"
                      onClick={() => handlePageChange("less")}
                    >
                      View Less
                    </span>
                  )}
                </div>
              </div>
            </li>
           
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default FeedTile;
