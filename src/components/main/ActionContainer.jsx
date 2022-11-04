import { Spin } from "antd";
import { useState } from "react";
import settingsService from "../../redux/service";
import { LoadingOutlined } from "@ant-design/icons";
const ActionContainer = (props) => {
  console.log(props?.postItem);
  const [likeLoading, setLikeLoading] = useState(false);
  const [unlikeLoading, setUnLikeLoading] = useState(false);
  const handlePostLike = async () => {
    const postId = props?.postItem?.postId;
    const req = {
      postId: postId,
      type: "like",
      username: "gpamu@evoketechnologies.com", // need to get Login User
    };
    setLikeLoading(true);
    const res = await settingsService?.likePost(req);
    setLikeLoading(false);
    console.log(res);
    if (res?.status === 200) {
      props?.postById(res?.data?.payload);
    }
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 14,
      }}
      spin
    />
  );
  const handlePostDisLike = async () => {
    const postId = props?.postItem?.postId;
    const req = {
      postId: postId,
      type: "unlike",
      username: "gpamu@evoketechnologies.com", // need to get Login User
    };
    setUnLikeLoading(true);
    const res = await settingsService?.disLikePost(req);
    setUnLikeLoading(false);
    console.log(res);
    if (res?.status === 200) {
      props?.postById(res?.data?.payload);
    }
  };
  return (
    <div className="we-video-info">
      <ul>
        <li>
          <span
            className="comment"
            data-toggle="tooltip"
            title="Comments"
            style={{ color: "white" }}
          >
            <i className="fa fa-comments-o" style={{ color: "white" }}></i>
            <ins>{props?.postItem?.viewLikeCountBean?.commentsCount}</ins>
          </span>
        </li>
        <li>
          <span className="like" data-toggle="tooltip" title="like">
            {likeLoading ? (
              <>
                <Spin indicator={antIcon} />
              </>
            ) : (
              <>
                <i className="ti-heart" onClick={() => handlePostLike()}></i>
                <ins>{props?.postItem?.viewLikeCountBean?.likesCount}</ins>
              </>
            )}
          </span>
        </li>
        <li>
          <span className="dislike" data-toggle="tooltip" title="dislike">
            {unlikeLoading ? (
              <>
                <Spin indicator={antIcon} />
              </>
            ) : (
              <>
                <i
                  className="ti-heart-broken"
                  onClick={() => handlePostDisLike()}
                ></i>
                <ins>{props?.postItem?.viewLikeCountBean?.disLikeCount}</ins>
              </>
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ActionContainer;
