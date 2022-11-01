import { Button, Upload } from "antd";
import React, { useState } from "react";

const UploadFile = (props) => {
  const { postType } = props;
  const [fileList, setFileList] = useState([]);
  const onChange = async ({ fileList: newFileList }) => {
    console.log(newFileList);
    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => resolve(reader.result);
    });
    console.log(src);
    console.log(postType);
    props?.handleChange(src, "mediaUrl");
    setFileList(newFileList);
  };
  let labelName = "Upload";
  let acceptType = "";
  switch (postType) {
    case "Image":
      labelName = "Upload Photo";
      acceptType = "image/*";
      break;
    case "Video":
      labelName = "Upload Video";
      acceptType = "video/mp4,video/x-m4v,video/*";
      break;
    case "Document":
      labelName = "Upload Document";
      acceptType="application/pdf" 
      break;
    default:
      labelName = "Upload";
      break;
  }
  return (
    <>
     {fileList?.length === 0 && (
      <Upload fileList={fileList} onChange={onChange} accept={acceptType} >
        <Button className="upload-btn-files">{labelName}</Button>
      </Upload>)}

    </>
  );
};

export default UploadFile;
