import axios from "axios";

const baseUrl = "/api";

const getAllBlogs = async () => {
  const response = await axios.get(`${baseUrl}/blogs`);
  return response.data;
};

const postBlog = async (blog) => {
  const response = await axios.post(`${baseUrl}/blogs`, blog);
  return response.data;
};

const deleteBlog = async (blogId) => {
  const response = await axios.delete(`${baseUrl}/blogs/${blogId}`);
  return response.data;
};

const updateBlog = async (blogId, updatedBlog) => {
  const response = await axios.put(`${baseUrl}/blogs/${blogId}`, updatedBlog)
  return response.data
}

export default {
  getAllBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
};
