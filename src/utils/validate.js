function validateLogin(username, password) {
  if (username.length < 5 || password.length < 8) {
    return false;
  }
  return true;
}

function validateSingup(email, username, password) {
  if (username.length < 5 || password.length < 8 || email < 5) {
    return false;
  }
  return true;
}

function validateComment(content) {
  if (content.length < 1) {
    return false;
  }
  return true;
}

export default {
  validateLogin,
  validateSingup,
  validateComment,
};
