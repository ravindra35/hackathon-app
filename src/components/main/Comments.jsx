import moment from "moment/moment";
import React from "react";

const Comments = (props) => {
  const commentedDate=moment(props?.item?.createdAt).fromNow()
  return (
    <>
      <li>
        <div className="comet-avatar">
          <img src="images/resources/comet-1.jpg" alt="" />
        </div>
        <div className="we-comment">
          <div className="coment-head">
            <h5>
              <a href="time-line.html" title="">
              {props?.item?.userDisplayName}
              </a>
            </h5>
            <span>{commentedDate}</span>
          </div>
          <p>
           {props?.item?.description}
          </p>
        </div>
      </li>
    </>
  );
};

export default Comments;
