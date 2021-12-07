import { useState, useEffect, useRef } from "react";
import getImg from "../api/api-service";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal";
import { toast } from "react-toastify";

const ImageGallery = ({ query }) => {
  const Status = {
    IDLE: "idle",
    PENDING: "pending",
    RESOLVED: "resolved",
    REJECTED: "rejected",
  };
  const [status, setStatus] = useState(Status.IDLE);

  const [pics, setPics] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");

  // const isFirstRender = useRef(true);

  const Load = () => {
    setPage((prevState) => prevState + 1);
  };

  const showModal = (largeImageURL) => {
    setImg(largeImageURL);
    setModal(!modal);
  };

  const backDrop = (e) => {
    if (e.currentTarget === e.target) {
      setModal(!modal);
      setImg("");
    }
  };

  useEffect(() => {
    console.log("main effect");

    if (!query) {
      return;
    }

    setPics([]);
    setStatus(Status.PENDING);

    // axios + tryCatch
    getImg(query, page)
      .then((data) => {
        if (data.length === 0) {
          setStatus(Status.IDLE);
          toast.error("No image available");
          return;
        }

        setPics(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    // fetch native
    // getImg(query, page)
    //   .then((data) => {
    //     setPics(data.hits);
    //     setStatus(Status.RESOLVED);
    //     // console.log(pics);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setStatus(Status.REJECTED);
    //   });
  }, [query]);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    if (page === 1) {
      return;
    }
    console.log("page effect");
    getImg(query, page)
      .then((data) => {
        setPics((prevState) => [...prevState, ...data]);
        setStatus(Status.RESOLVED);
        toast.success("Запрос выполнен");
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page]);

  if (status === Status.IDLE) {
    return <div></div>;
  }
  if (status === Status.PENDING) {
    return (
      <div className="loaderDiv">
        <Loader />
      </div>
    );
  }

  if (status === Status.REJECTED) {
    return <h1>{error.message}</h1>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ul className="ImageGallery">
          {pics.map((pic) => (
            <ImageGalleryItem data={pic} key={pic.id} showModal={showModal} />
          ))}
        </ul>
        {modal && <Modal img={img} backDrop={backDrop} />}
        <Button addMore={Load} />
      </>
    );
  }
};

export default ImageGallery;
