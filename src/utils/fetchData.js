import axios from "axios";

axios.defaults.baseURL = "https://exercisedb.p.rapidapi.com";
axios.defaults.headers.common["X-RapidAPI-Key"] = import.meta.env.VITE_API_KEY;
axios.defaults.headers.common["X-RapidAPI-Host"] = "exercisedb.p.rapidapi.com";

export const fetchData = async (url) => {
  try {
    const response = await axios.request(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
