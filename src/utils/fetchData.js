import axios from "axios";

axios.defaults.baseURL = "https://exercisedb.p.rapidapi.com";
axios.defaults.headers.common["X-RapidAPI-Key"] =
  "45fe0b6de0mshc9d34cfde72bf5dp1b80d7jsn5c098af3d35c";
axios.defaults.headers.common["X-RapidAPI-Host"] = "exercisedb.p.rapidapi.com";

export const fetchData = async (url) => {
  try {
    const response = await axios.request(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
