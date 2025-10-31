import axios from "axios";

const twitchClientId = process.env.TWITCH_CLIENT_ID; 
const accessToken = localStorage.getItem("access-token")

const twitchAxios = axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    "Client-Id": twitchClientId,
    Authorization: `Bearer ${accessToken}`,
  },
});

twitchAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default twitchAxios;
