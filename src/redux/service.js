import axios from "axios";

// get user details
const getUserDetails = async () => {    
  const response = await axios.get(
    `https://dummyjson.com/users/1`
  );
  // console.log(response);

  return response.data;
};
const getPostDetails = async () => {    
  // const response = await axios.get(
  //   `https://dummyjson.com/users/1`
  // );
  // console.log(response);

  // return response.data;
};
const getPostComments = async (req) => {    
  const response = await axios.get(
    `https://dummyjson.com/comments/post/5`
  );
  console.log(response);

  return response.data;
};
const savePost = async (req) => {  
  console.log(req)  
  // const response = await axios.post(
  //   `https://dummyjson.com/comments/add`,req
  // );
  // return response;
};
const saveComment = async (req) => {  
  console.log(req)  
  const response = await axios.post(
    `https://dummyjson.com/comments/add`,req
  );
  return response;
};

const settingsService = { getUserDetails,savePost,getPostDetails,saveComment,getPostComments };
export default settingsService;
