import twitchAxios from "../middleware/api";

export const fetchTwitchStreamers = async (query: string) => {
  try {
    const response = await twitchAxios.get(
      `https://api.twitch.tv/helix/users?login=${query}`
    );
    return response;
  } catch (error) {
    throw new Error("Error occured while fetching streamer info");
  }
};
