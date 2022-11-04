import axios from "axios";
import config from "../config/config";

const apiUrlCreator = (endPoint) => {
  return `${config?.url}/${endPoint}`;
};

// get user details
const getUserDetails = async () => {};
const getPostDetails = async (req) => {
  console.log(req);
  const response = await axios.post(apiUrlCreator("post/all"), req);
  console.log(response);
  return response;
};
const getPostById = async (reqId) => {
  console.log(reqId);
};
const likePost = async (req) => {
  console.log(req);
  const response = await axios.post(apiUrlCreator("/like/update"), req);
  console.log(response);
  return response;
};
const disLikePost = async (req) => {
  console.log(req);
  const response = await axios.post(apiUrlCreator("/like/update"), req);
  console.log(response);
  return response;
};
const UploadPostFiles = async (req) => {
  console.log(req);
  const response = await axios.post(apiUrlCreator("post/uploadfile"), req, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(response);
  return response;
};
const savePost = async (req) => {
  console.log(req);
  // const payload = {
  //   post: req,
  // };
  const response = await axios.post(apiUrlCreator("post/create"), req,{headers: { "Content-Type": "multipart/form-data" }});
  return response;
};
const saveComment = async (req) => {
  console.log(req);
  const response = await axios.post(apiUrlCreator("comment/create"), req);
  console.log(response);
  return response;
};

const settingsService = {
  getUserDetails,
  savePost,
  getPostDetails,
  saveComment,
  getPostById,
  likePost,
  disLikePost,
  UploadPostFiles,
};
export default settingsService;
