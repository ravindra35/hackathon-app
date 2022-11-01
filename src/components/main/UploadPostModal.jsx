import { Button, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CheckableTag from "antd/lib/tag/CheckableTag";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePost } from "../../redux/posts/postSlice";
import UploadFile from "./UploadFile";
import { useSelector } from "react-redux";
const tagsData = [
  "Entertainment",
  "Travel",
  "Learning",
  "Sports",
  "Food",
  "Others",
];
const UploadPostModal = (props) => {
  const data = useSelector((state) => state);
  console.log(data?.postData);
  const { postType } = props;
  const dispatch = useDispatch();
  const initialValues = {
    description: "",
    mediaUrl: "",
    mediaType: postType,
    category: "",
  };

  const [postData, setPostData] = useState(initialValues);
  const handleChangeCategory = (tag, checked) => {
    if (!checked) {
      setPostData({ ...postData, category: "" });
    } else {
      setPostData({ ...postData, category: tag });
    }
  };
  const handlePost = () => {
    console.log(postData);
    dispatch(savePost(postData))
    props?.handleClose()
  };
  const handleChange = (e, name) => {
    console.log(e);
    setPostData({ ...postData, [name]: e });

  };
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
        <Button
          key="submit"
          type="primary"
          onClick={handlePost}
          loading={data?.postData?.isLoading}
        >
          Done
        </Button>,
      ]}
    >
      {postType === "Text" ? (
        <>
          <TextArea
            rows="4"
            placeholder="write something"
            value={postData?.description}
            onChange={(e) => handleChange(e?.target?.value, "description")}
          ></TextArea>
          <div style={{ marginTop: "0.5rem" }}>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={postData?.category === tag}
                onChange={(checked) => handleChangeCategory(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
        </>
      ) : (
        <>
          {postData?.mediaUrl === "" ? (
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
                value={postData?.description}
                onChange={(e) => handleChange(e?.target?.value, "description")}
              ></TextArea>
              <div style={{ margin: "0.5rem" }}>
                {tagsData.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={postData?.category.indexOf(tag) > -1}
                    onChange={(checked) => handleChangeCategory(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </div>

              <div style={{ height: "200px", overflow: "auto" }}>
                {postData?.mediaType === "Image" && (
                  <img src={postData?.mediaUrl} />
                )}
                {postData?.mediaType === "Document" && (
                  <iframe src={postData?.mediaUrl} />
                )}
              </div>
              {postData?.mediaType === "Video" && (
                <video width="500" controls>
                  <source src={postData?.mediaUrl} type="video/mp4" />
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
