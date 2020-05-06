import axios from "axios";
class CommonHTTP {
  signup(userData) {
    return axios.post(
      "https://us-central1-stats-board-2020.cloudfunctions.net/api/signup",
      userData
    );
  }

  login(userData) {
    return axios.post(
      "https://us-central1-stats-board-2020.cloudfunctions.net/api/login",
      userData
    );
  }
}
export default CommonHTTP;
