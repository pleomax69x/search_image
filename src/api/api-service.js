import axios from "axios";

const apiKey = "18836108-b754cab046c957f0572c5e4ce";
// const defaultURL = "https://pixabay.com/api/";

axios.defaults.baseURL = "https://pixabay.com/api";

const getImg = async (query = "", page = 1) => {
  try {
    const response = await axios.get(
      `/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    throw new Error("No Image Available");
  }
};

// const getImg = (query = "", page = 1) => {
//   return fetch(
//     `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&per_page=12`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error("No Image Available"));
//   });
// };

export default getImg;
