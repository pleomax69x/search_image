import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { useState, useEffect, useRef } from "react";
import getImg from "./api/api-service";

function App() {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState("");
  const apiKey = "18836108-b754cab046c957f0572c5e4ce";

  const isFirstRender = useRef(true);
  const page = 1;

  // const handleFormSubmit = (searchQuery) => {
  //   setQuery(searchQuery);
  // };

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    // if (query === "") {
    //   return;
    // }
    if (!query) {
      return;
    }
    // getImg(query).then((res) => console.log(res.data));
    // setPics([1]);
    // setPics(getImg())
    // getImg.than
    // getImg();
    // console.log(pics);
    // fetch(
    //   `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&per_page=12`
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.hits);

    //     setPics(data.hits);
    //     console.log(pics);
    //   });
  }, [query, pics]);

  // largeImageURL
  return (
    <div className="App">
      <Searchbar onSubmit={setQuery} />
      {pics && <ImageGallery pics={pics} />}
      {/* <ImageGallery pics={pics} /> */}
      <Button />
    </div>
  );
}

export default App;
