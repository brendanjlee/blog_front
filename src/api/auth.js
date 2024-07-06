import axios from "axios";

const apiBaseUrl = "http://localhost:3003/api";

const login = async (username, password) => {
  try {
    const { data } = await axios.post(
      `${apiBaseUrl}/auth/login`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json", // Ensure proper headers are set
        },
      }
    );
    return data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("Network error");
    }
  }
};

export default {
  login,
};
