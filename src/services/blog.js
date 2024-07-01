import axios from "axios";

const apiBaseUrl = "http://localhost:3003/api";

const getAllPosts = async () => {
  const { data } = await axios.get(`${apiBaseUrl}/posts`);

  return data;
};

const getPostById = async (postId) => {
  const { data } = await axios.get(`${apiBaseUrl}/posts/${postId}`);

  return data;
};

const getPostComments = async (postId) => {
  const { data } = await axios.get(`${apiBaseUrl}/posts/${postId}/comments `);
  return data;
};

export default {
  getAllPosts,
  getPostById,
  getPostComments,
};
