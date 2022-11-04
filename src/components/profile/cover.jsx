import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Upload } from "antd";

const Cover = () => {
  const [coverImage, setCoverImage] = useState();
  const [userImage, setUserImage] = useState();
  const [coverPic, setCoverPic] = useState();
  const [userPic, setUserPic] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [btnloading, setBtnloading] = useState(false);
  const [btnCvrloading, setBtnCvrloading] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:9004/profile/getbyid/1").then((res) => {
      let response = res.data.payload;
      setCoverImage(response.coverpic);
      setUserImage(response.profilepic);
    });
  }, []);

  // const onUserImageChange = async ({ fileList: newFileList }) => {
  //   console.log(newFileList);
  //   const src = await new Promise((resolve) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(newFileList[newFileList?.length - 1].originFileObj);
  //     reader.onload = () => resolve(reader.result);
  //   });
  //   console.log(newFileList[newFileList?.length - 1].originFileObj, "serc");
  //   setUserImage(src);
  //   // props?.handleChange(src, "mediaUrl");
  //   // setFileList(newFileList);
  //   let options = {
  //     imageType: "profilepage",
  //     file: newFileList[newFileList?.length - 1].originFileObj,
  //     profileId: 1,
  //   };
  //   axios
  //     .post("http://localhost:9004/profile/uploadProfileImages", options, {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       // then print response status
  //       console.log(res.statusText);
  //     });
  // };

  const onCoverImageChange = async ({ fileList: newFileList }) => {
    setBtnCvrloading(true);
    let formData = new FormData();
    formData.append("imageType", "coverpage");
    formData.append("profileId", 1);
    formData.append("file", newFileList[0].originFileObj);
    axios
      .post("http://localhost:9004/profile/uploadProfileImages", formData)
      .then((res) => {
        // then print response status
        console.log(res.data.payload);
        setCoverImage(res.data.payload.coverpic);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setBtnCvrloading(false);
      });
  };

  const onUserImageChange = async ({ fileList: newFileList }) => {
    setBtnloading(true);
    let formData = new FormData();
    formData.append("imageType", "profilepage");
    formData.append("profileId", 1);
    formData.append("file", newFileList[0].originFileObj);
    axios
      .post("http://localhost:9004/profile/uploadProfileImages", formData)
      .then((res) => {
        // then print response status
        console.log(res);
        setUserImage(res.data.payload.profilepic);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setBtnloading(false);
      });
  };

  return (
    <section>
      <div className="feature-photo">
        <figure>
          <img src={coverImage} />
        </figure>
        <div className="add-btn">
          {/* <span>1205 followers</span> */}
          {/* <a href="#" title="" data-ripple="">
            Add Friend
          </a> */}
        </div>
        <form className="edit-phto">
          {/* <i className="fa fa-camera-retro"></i> */}

          <label className="fileContainer">
            <span style={{ paddingRight: "5px" }}>Edit Cover Photo</span>
            <Upload
              showUploadList={false}
              fileList={fileList}
              accept={"image/*"}
              onChange={onCoverImageChange}
            >
              <Button
                className="upload-btn-files"
                loading={btnCvrloading}
                disabled={btnCvrloading}
              >
                <i className="fa fa-camera-retro fa-sm"></i>
              </Button>
            </Upload>
          </label>
        </form>
        <div className="container-fluid">
          <div className="row merged">
            <div className="col-lg-2 col-sm-3">
              <div className="user-avatar">
                <figure>
                  <img src={userImage} />
                  <form className="edit-phto">
                    <label className="fileContainer">
                      <Upload
                        showUploadList={false}
                        fileList={fileList}
                        onChange={onUserImageChange}
                        accept={"image/*"}
                      >
                        <Button
                          className="upload-btn-files"
                          loading={btnloading}
                          disabled={btnloading}
                        >
                          <i className="fa fa-camera-retro fa-sm"></i>
                        </Button>
                      </Upload>
                    </label>
                  </form>
                </figure>
              </div>
            </div>
            <div className="col-lg-10 col-sm-9">
              <div className="timeline-info">
                <ul>
                  <li className="admin-name">
                    <h5>Janice Griffith</h5>
                    <span>Group Admin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
