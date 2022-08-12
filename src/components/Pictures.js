// class componnent

// import React, { Component } from "react";

// export default class picture extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { timer: null };
//   }

//   componentDidMount() {
//     console.log("composant picture monte");
//     this.setState({
//       timer: setInterval(() => {
//         console.log("timer appele");
//       }, 1000),
//     });
//   }

//   componentWillUnmount() {
//     console.log("composant picture detruit");
//     clearInterval(this.state.timer);
//   }

//   render() {
//     return <img className="w-40 mx-auto" src="logo192.png" alt="" />;
//   }
// }

// component fonctionnel
import React from "react";
import { useState, useEffect } from "react";
import Picture from "./Picture";

export default function Pictures() {
  //   const [myTimer, setMyTimer] = useState(null);
  const [images, setImages] = useState([
    "logo192.png",
    "done.png",
    "error.png",
  ]);

  const [image, setImage] = useState(null);

  function addImageName() {
    let newImages = [...images, image];
    setImages(newImages);
  }

  function ImagesComponent() {
    return images.map((name, index) => (
      <Picture
        key={index}
        imageName={name}
        index={index}
        handleRemove={handleRemoveImage}
      />
    ));
  }

  function handleRemoveImage(index) {
    setImages(images.filter((image, i) => i !== index));
  }

  // useEffect(() => {
  //   const myTimer = setInterval(() => {
  //     console.log("Tmer appele");
  //   }, 1000);
  //   return () => clearInterval(myTimer);
  // }, []);

  function handleImageName(event) {
    setImage(event.target.value);
  }

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-around">
        <ImagesComponent />
      </div>

      <div className="mt-5">
        <input
          className=" border border-gray-600 shadow-md shadow-purple-400 rounded p-3 mr-2"
          type="text"
          onChange={handleImageName}
        />

        <button
          className="bg-purple-400 text-white rounded p-3"
          type="submit"
          onClick={addImageName}
        >
          Entrer le nom d'une image
        </button>
      </div>
    </div>
  );
}
