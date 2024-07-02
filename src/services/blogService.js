import axios from "axios";

const baseUrl = "http://localhost:3000/api";

const getAllBlogs = async () => {
  const response = await axios.get(`${baseUrl}/blogs`);
  return response.data;
};

const postBlog = async (blog) => {
  const response = await axios.post(`${baseUrl}/blogs`, blog);
  return response.data;
};

export default {
  getAllBlogs,
  postBlog,
};
