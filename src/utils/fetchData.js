import axios from "axios";

axios.defaults.baseURL = "https://exercisedb.p.rapidapi.com";
axios.defaults.headers.common["X-RapidAPI-Key"] =
  "caddf3324cmsh37f357dee75db7cp129e1ajsnc5d712c0eea9";
axios.defaults.headers.common["X-RapidAPI-Host"] = "exercisedb.p.rapidapi.com";

export const fetchData = async (url) => {
  try {
    const response = await axios.request(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
