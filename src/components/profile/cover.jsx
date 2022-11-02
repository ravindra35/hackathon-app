import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Upload } from "antd";

const Cover = () => {
  const [coverImage, setCoverImage] = useState();
  const [userImage, setUserImage] = useState();
  const [ci, sci] = useState();
  const [fileList, setFileList] = useState([]);
  const onChange = async ({ fileList: newFileList }) => {
    console.log(newFileList);
    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[newFileList?.length - 1].originFileObj);
      reader.onload = () => resolve(reader.result);
      console.log(reader, "reader");
    });
    console.log(src, "serc");
    setUserImage(src);
    // props?.handleChange(src, "mediaUrl");
    setFileList(newFileList);
    axios
      .post("http://localhost:3001/upload", src, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };
  useEffect(() => {
    setCoverImage("images/resources/timeline-1.jpg");
    setUserImage("images/resources/user-avatar.jpg");
  }, []);

  const onCoverImageChange = (e) => {
    // console.log(e.target.files[0], "cover image", new Date().getTime());
    e.preventDefault();
    var file = e.target.files[0];
    var formData = new FormData();

    formData.append("file", file);
    console.log(formData, "formdata");
    var options = {
      data: { file: userImage },
    };
    // var options = { content: formData };
    // console.log(options, "file data", formData);
    axios
      .post("http://localhost:3001/upload", options, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

  const onUserImageChange = (e) => {
    e.preventDefault();
    var file = e.target.files[0];
    var formData = new FormData();
    console.log(e.target.value);
    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    formData.append("file", file);
    console.log(formData, "formdata1");
    // var options = {
    //   data: { file: formData },
    // };
    // console.log(e.target.files[0], "user image", new Date().getTime());
    // sci(e.target.files[0]);
    // const data = new FormData();
    // data.append("file", e.target.files[0]);
    // console.log(options, "file data", formData);
    // axios
    //   .post("http://localhost:3001/upload", formData, {
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
  };

  return (
    <section>
      <div class="feature-photo">
        <figure>
          <img src={coverImage} />
        </figure>
        <div class="add-btn">
          {/* <span>1205 followers</span> */}
          {/* <a href="#" title="" data-ripple="">
            Add Friend
          </a> */}
        </div>
        <form class="edit-phto">
          <i class="fa fa-camera-retro"></i>
          <label class="fileContainer">
            Edit Cover Photo
            <input
              type="file"
              name="filecimage"
              onChange={onCoverImageChange}
            />
          </label>
        </form>
        <div class="container-fluid">
          <div class="row merged">
            <div class="col-lg-2 col-sm-3">
              <div class="user-avatar">
                <figure>
                  <img src={userImage} />
                  <form class="edit-phto">
                    <label class="fileContainer">
                      {/* Edit Display Photo1
                      <input
                        type="file"
                        name="fileuimage"
                        onChange={(e) => onUserImageChange(e)}
                      /> */}
                      <Upload
                        showUploadList={false}
                        fileList={fileList}
                        onChange={onChange}
                        accept={"image/*"}
                      >
                        <Button className="upload-btn-files">
                          <i class="fa fa-camera-retro"></i>
                        </Button>
                      </Upload>
                    </label>
                  </form>
                </figure>
              </div>
            </div>
            <div class="col-lg-10 col-sm-9">
              <div class="timeline-info">
                <ul>
                  <li class="admin-name">
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
