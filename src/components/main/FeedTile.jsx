import { Button } from "antd";

const FeedTile = (props) => {
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
            {props?.item?.mediaType ==="Image" && (<>
            
            </>)}
            {props?.item?.mediaType ==="Video" && (<>

            </>)}
            {props?.item?.mediaType ==="Document" && (<>

            </>)}
            <img src="images/resources/user-post.jpg" alt="" />
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
        <div className="coment-area">
          <ul className="we-comet">
            <li>
              <div className="comet-avatar">
                <img src="images/resources/comet-1.jpg" alt="" />
              </div>
              <div className="we-comment">
                <div className="coment-head">
                  <h5>
                    <a href="time-line.html" title="">
                      Jason borne
                    </a>
                  </h5>
                  <span>1 year ago</span>
                </div>
                <p>
                  we are working for the dance and sing songs. this car is very
                  awesome for the youngster. please vote this car and like our
                  post
                </p>
              </div>
            </li>
            <li>
              <div className="comet-avatar">
                <img src="images/resources/comet-1.jpg" alt="" />
              </div>
              <div className="we-comment">
                <div className="coment-head">
                  <h5>
                    <a href="time-line.html" title="">
                      Donald Trump
                    </a>
                  </h5>
                  <span>1 week ago</span>
                </div>
                <p>
                  we are working for the dance and sing songs. this video is
                  very awesome for the youngster. please vote this video and
                  like our channel
                  <i className="em em-smiley"></i>
                </p>
              </div>
            </li>
            <li>
              <a href="#" title="" className="showmore underline">
                more comments
              </a>
            </li>
            <li className="post-comment">
              <div className="comet-avatar">
                <img src="images/resources/comet-1.jpg" alt="" />
              </div>
              <div className="post-comt-box">
                <div>
                  <textarea placeholder="Post your comment"></textarea>
                  <Button>Submit</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedTile;
