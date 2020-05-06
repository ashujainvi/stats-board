import jwtDecode from "jwt-decode";

// check if user is auth on page load
export const isUserAuthenticated = () => {
  let authenticated = false;
  const token = localStorage.FBTokenId;
  if (token) {
    // decode token to get expiration time
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      // todo: window not working
      // window.location.href("/login");
      authenticated = false;
    } else {
      authenticated = true;
    }
  }
  return authenticated;
};
