import axios from "axios";

// get user details
const getUserDetails = async () => {    
  const response = await axios.get(
    `https://dummyjson.com/users/1`
  );
  console.log(response);

  return response.data;
};

const settingsService = { getUserDetails };
export default settingsService;
