import React, { useState } from "react";
import UploadImageModal from "./UploadImageModal";

const CreatePost = () => {
  const initialValues = {
    text: "",
    image: "",
    video: "",
    document: "",
    type: "",
    category: "",
  };
  const modalInitialValues={
    image: false,
    video: false,
    document: false,
  }
  const [post, setPost] = useState(initialValues);
  const [showModal, setShowModal] = useState(modalInitialValues);
  const handleClose=()=>{
    setShowModal(modalInitialValues)
  }
  const handleImageSubmit=()=>{
  }
  const handleOpenModal=(name)=>{
    setShowModal({...showModal,[name]:true})
  }
  return (
    <>
      <div className="central-meta">
        <div className="new-postbox">
          <figure>
            <img src="images/resources/admin2.jpg" alt="" />
          </figure>
          <div className="newpst-input">
            <form method="post">
              <textarea
                rows="2"
                placeholder="write something"
                value={post?.text}
              ></textarea>
              <div className="attachments">
                <ul>
                  <li>
                    <i className="fa fa-image" onClick={()=>handleOpenModal('image')}></i>
                    <label className="fileContainer">
                      {/* <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                      /> */}
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-video-camera"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-file"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <button type="submit">Post</button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal?.image && <UploadImageModal handleClose={handleClose} handleImageSubmit={handleImageSubmit} />}
    </>
  );
};

export default CreatePost;
