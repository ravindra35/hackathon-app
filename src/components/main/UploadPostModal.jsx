import { Button, Modal, notification } from "antd";
import TextArea from "antd/lib/input/TextArea";
import CheckableTag from "antd/lib/tag/CheckableTag";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPostDetails,
  resetPostData,
  savePost,
} from "../../redux/posts/postSlice";
import UploadFile from "./UploadFile";
import { useSelector } from "react-redux";
import settingsService from "../../redux/service";
const tagsData = [
  "Entertainment",
  "Travel",
  "Learning",
  "Sports",
  "Food",
  "Others",
];
const UploadPostModal = (props) => {
  const {
    savePostSuccess,
    savePostError,
    savePostMessage,
    savePostLoading,
    savePostResponse,
  } = useSelector((state) => state.postData);
  const { postType } = props;
  const dispatch = useDispatch();
  const initialValues = {
    category: "",
    createdBy: "gpamu@evoketechnologies.com",
    description: "",
    mediaType: postType,
    mediaUrl: "",
    profileId: 1,
    mediabase64:""
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
    const req=
      // file:postData?.mediaUrl,
      {...postData,mediabase64:undefined,file:postData?.mediaUrl,mediaUrl:undefined}
    
    // const req= {...postData,mediaUrl:"",mediaType:""}
    dispatch(savePost(req));
  };
  const handleChange = (e, name) => {
    setPostData({ ...postData, [name]: e });
  };
  const handleUpdateMedia = (media,mediabase64) => {
    setPostData({ ...postData, mediaUrl:media,mediabase64:mediabase64});
  };
  useEffect(() => {
    if (savePostSuccess) {
      dispatch(resetPostData())
      const req = {
        post: {
          profileId: 0,
        },
      };
      dispatch(getPostDetails(req));
      // handleUploadAPi();
      props?.handleClose()
    }
    if (savePostError) {
      OpenNotificationWithIcon();
    }
  }, [savePostSuccess, savePostError]);

  const handleUploadAPi = async () => {
    console.log(savePostResponse)
    const postId = savePostResponse?.postId;
    const req = {
      file: postData?.mediaUrl?.originFileObj,
      postId,
      mediaType: postData?.mediaType,
    };
    const res = await settingsService?.UploadPostFiles(req);
    console.log(res)
  };

  const OpenNotificationWithIcon = () => {
    notification["error"]({
      message: savePostMessage,
    });
    dispatch(resetPostData());
    // props?.handleClose()
  };

  return (
    <Modal
      title="Create Post"
      open={true}
      maskClosable={false}
      onCancel={props?.handleClose}
      footer={[
        <Button key="back" onClick={props?.handleClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handlePost}
          loading={savePostLoading}
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
                handleUpdateMedia={(media, mediabase64) => handleUpdateMedia(media, mediabase64)}
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

              {postData?.mediaType === "Image" && (
                <div style={{ height: "200px", overflow: "auto" }}>
                  <img src={postData?.mediabase64} />
                </div>
              )}
              {postData?.mediaType === "Document" && (
                <iframe src={postData?.mediabase64} />
              )}
              {postData?.mediaType === "Video" && (
                <div style={{ height: "200px", overflow: "auto" }}>
                  <video width="450" controls>
                    <source src={postData?.mediabase64} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </div>
              )}
            </>
          )}
        </>
      )}
      {/* <>
      {savePostError && savePostMessage && <OpenNotificationWithIcon key={savePostMessage}/>}</> */}
    </Modal>
  );
};

export default UploadPostModal;
