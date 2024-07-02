import axios from "axios";

const baseUrl = "http://localhost:3000/api/blogs";

const getAllBlogs = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default {
  getAllBlogs,
};
