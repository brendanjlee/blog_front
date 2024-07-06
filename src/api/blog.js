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

const postComment = async (postId, commentData, token) => {
  try {
    const { data } = await axios.post(
      `${apiBaseUrl}/posts/${postId}/comments`,
      {
        content: commentData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    if (error.resposne) {
      throw error.resposne.data;
    } else {
      throw new Error("Network error");
    }
  }
};

const deleteCommentById = async (postId, commentId, token) => {
  try {
    const { data } = await axios.delete(
      `${apiBaseUrl}/posts/${postId}/comments/${commentId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    if (error.resposne) {
      throw error.resposne.data;
    } else {
      throw new Error("Network error");
    }
  }
};

export default {
  getAllPosts,
  getPostById,
  getPostComments,
  postComment,
  deleteCommentById,
};
