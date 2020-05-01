export const isLoggedIn = () => {
  if (sessionStorage.getItem("AuthToken")) {
    return true;
  } else {
    return false;
  }
};
