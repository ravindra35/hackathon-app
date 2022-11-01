import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Upload } from "antd";
// import ImgCrop from "antd-img-crop";

const UploadImageModal = (props) => {
  console.log(props);
  const [Image, setImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const onChange = async ({ fileList: newFileList }) => {
    console.log(newFileList);
    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => resolve(reader.result);
    });
    console.log(src)
    setImage(src);
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  console.log(fileList);
  return (
    <>
      <Modal
        title="Basic Modal"
        open={true}
        onCancel={props?.handleClose}
        footer={[
          <Button key="back" onClick={props?.handleClose}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={props?.handleImageSubmit}
          >
            Done
          </Button>,
        ]}
      >
        {/* accept={"video/mp4,video/x-m4v,video/*"} */}
        {fileList?.length === 0 ? (
          <>
            {" "}
            <Upload fileList={fileList} onChange={onChange} >
              Upload Document
            </Upload>
          </>
        ) : (
          <>
            {/* <img src={Image} /> */}
          
            {/* <video width="500" controls>
              <source src={Image} type="video/mp4" />
              Your browser does not support HTML video.
            </video> */}
            {/* <iframe src={Image}/> */}
            {/* <iframe src={`https://docs.google.com/gview?url=${Image}&embedded=true`}/> */}
          </>
        )}
      </Modal>
    </>
  );
};

export default UploadImageModal;
