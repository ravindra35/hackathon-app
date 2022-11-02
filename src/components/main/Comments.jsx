import React from "react";

const Comments = (props) => {
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
              {props?.item?.createdBy}
              </a>
            </h5>
            <span>1 year ago</span>
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
