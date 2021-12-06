import axios from "axios";

const apiKey = "18836108-b754cab046c957f0572c5e4ce";
// const defaultURL = "https://pixabay.com/api/";

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.headers.common[
  "Authorization"
] = `Beare 18836108-b754cab046c957f0572c5e4ce`;

// axios({
//   method: "get",
//   url: "/user/12345",
//   data: {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   },
// });

// const getImg = async ({ query = "", page = 1 }) => {
//   try {
//     const response = await axios.get(
//       `/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&per_page=12`
//     );

//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getImg = ({ query = "", page = 1 }) => {
//   return axios.get(
//     `/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&per_page=12`
//   );
// };
const getImg = ({ query = "", page = 1 }) => {
  fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&per_page=12`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export default getImg;
