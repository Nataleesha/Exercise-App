import axios from "axios";

const videoApi = axios.create({
  baseURL: "https://youtube-search-and-download.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  },
});

export const fetchVideos = async (url) => {
  try {
    const response = await videoApi.request(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
