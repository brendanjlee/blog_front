function validateLogin(username, password) {
  if (username.length < 5 || password.length < 8) {
    return false;
  }
  return true;
}

export default {
  validateLogin,
};
