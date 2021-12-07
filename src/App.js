import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState("");

  // const handleFormSubmit = (searchQuery) => {
  //   setQuery(searchQuery);
  // };

  // largeImageURL

  return (
    <div className="App">
      <Searchbar onSubmit={setQuery} />
      <ImageGallery query={query} />

      <ToastContainer />
    </div>
  );
}

export default App;
