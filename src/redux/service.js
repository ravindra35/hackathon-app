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
const savePost = async (req) => {  
  console.log(req)  
  // const response = await axios.post(
  //   `https://jsonplaceholder.typicode.com/posts`,req
  // );
  // return response;
};

const settingsService = { getUserDetails,savePost,getPostDetails };
export default settingsService;
