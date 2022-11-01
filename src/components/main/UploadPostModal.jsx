import { Button, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CheckableTag from "antd/lib/tag/CheckableTag";
import React, { useState } from "react";
import UploadFile from "./UploadFile";
const tagsData = ["Movies", "Books", "Music", "Sports"];
const UploadPostModal = (props) => {
  const initialValues = {
    text: "",
    image: "",
    video: "",
    document: "",
    type: "",
    categories: [],
  };

  const [postData, setPostData] = useState(initialValues);
  const handleChangeCategory = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...postData?.categories, tag]
      : postData?.categories.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setPostData({ ...postData, categories: nextSelectedTags });
  };
  const handlePost = () => {
    console.log(postData);
  };
  const handleChange = (e, name) => {
    console.log(e);
    setPostData({ ...postData, [name]: e });
  };
  const { postType } = props;
  return (
    <Modal
      title="Create Post"
      open={true}
      maskClosable={false}
    //   style={{height:'400px',overflow:'auto'}}
      onCancel={props?.handleClose}
      footer={[
        <Button key="back" onClick={props?.handleClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handlePost}>
          Done
        </Button>,
      ]}
    >
      {postType === "text" ? (
        <>
          <TextArea
            rows="4"
            placeholder="write something"
            value={postData?.text}
            onChange={(e) => handleChange(e?.target?.value, "text")}
          ></TextArea>
          <div style={{ marginTop: "0.5rem" }}>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={postData?.categories.indexOf(tag) > -1}
                onChange={(checked) => handleChangeCategory(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
        </>
      ) : (
        <>
          {postData?.image === "" &&
          postData?.document === "" &&
          postData?.video === "" ? (
            <>
              <UploadFile
                postType={postType}
                handleChange={(val, name) => handleChange(val, name)}
              />
            </>
          ) : (
            <>
              <TextArea
                rows="4"
                placeholder="write something"
                value={postData?.text}
                onChange={(e) => handleChange(e?.target?.value, "text")}
              ></TextArea>
              <div style={{ margin: "0.5rem" }}>
                {tagsData.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={postData?.categories.indexOf(tag) > -1}
                    onChange={(checked) => handleChangeCategory(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </div>
              {postData?.image !== "" && <img src={postData?.image} />}
              {postData?.document !== "" && <iframe src={postData?.document} />}
              {postData?.video !== "" && (
                <video width="500" controls>
                  <source src={postData?.video} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              )}
            </>
          )}
        </>
      )}
    </Modal>
  );
};

export default UploadPostModal;
