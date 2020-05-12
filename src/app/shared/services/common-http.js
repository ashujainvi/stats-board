import axios from "axios";

// CONSTANTS
const BASE_API_URL =
  "https://us-central1-stats-board-2020.cloudfunctions.net/api";
const LOGIN_API_URL = `${BASE_API_URL}/login`;
const SIGNUP_API_URL = `${BASE_API_URL}/signup`;
const PAGESPEED_API_URL = `${BASE_API_URL}/pagespeed`;

// set authorization token on login
const FBTokenId = localStorage.getItem("FBTokenId");
axios.defaults.headers.common["Authorization"] = FBTokenId;

export const signupHttp = (userData) => {
  return axios.post(SIGNUP_API_URL, userData);
};

export const loginHttp = (userData) => {
  return axios.post(LOGIN_API_URL, userData);
};

// returns an array of all page speed audits
export const getPageSpeedHttp = (websiteUrl, newAudit) => {
  const params = {
    url: "https://www.ashutoshjainvi.com",
    newAudit: false,
  };
  return axios.get(PAGESPEED_API_URL, { params });
};
