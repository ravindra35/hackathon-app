import { Button } from "antd";
import React, { useState } from "react";
import UploadPostModal from "./UploadPostModal";

const CreatePost = () => {

  const [postType, setPostType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpenModal = (name) => {
    setPostType(name);
    setShowModal(true);
  };
  return (
    <>
      <div className="central-meta">
        <div className="new-postbox">
          <figure>
            <img src="images/resources/admin2.jpg" alt="" />
          </figure>
          <div className="newpst-input">
            {/* <textarea
                rows="2"
                placeholder="write something" onClick={()=>handleOpenModal('text')}
              ></textarea> */}
            <Button
              className="create-post-btn"
              onClick={() => handleOpenModal("text")}
            >
              {"Create a Post"}
            </Button>
            <div className="attachments">
              <ul className="post-icons">
                <li  onClick={() => handleOpenModal("image")}>
                  <i
                    className="fa fa-image  fa-lg"
                    style={{ color: "white" }}
                   
                  ></i>
                  <span className="pl-2 post-icon-text">{"Photo"}</span>
                </li>
                <li  onClick={() => handleOpenModal("video")}>
                  <i
                    className="fa fa-video-camera  fa-lg"
                    style={{ color: "white" }}
                  ></i>
                  <span className="pl-2 post-icon-text">{"Video"}</span>
                </li>
                <li onClick={() => handleOpenModal("document")}>
                  <i
                    className="fa fa-file  fa-lg"
                    style={{ color: "white" }}
                  ></i>
                  <span className="pl-2 post-icon-text">{"Document"}</span>
                </li>
                {/* <li>
                    <button type="submit">Post</button>
                  </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <UploadPostModal
          handleClose={handleClose}
          postType={postType}
        />
      )}
    </>
  );
};

export default CreatePost;
