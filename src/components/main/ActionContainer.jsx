import { Button } from "antd";
import { useRef, useState } from "react";
import CommentContainer from "./CommentContainer";
import Comments from "./Comments";

const ActionContainer = (props) => {
  console.log(props);
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
          <span className="dislike" data-toggle="tooltip" title="dislike">
            <i className="ti-heart-broken"></i>
            <ins>200</ins>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ActionContainer;
