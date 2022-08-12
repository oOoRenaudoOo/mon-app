import React, { useState } from "react";

export default function Picture({ imageName, index, handleRemove }) {
  const [showCloseButton, setShowCloseButton] = useState(-1);

  return (
    <div
      key={index}
      className="relative"
      onMouseEnter={() => setShowCloseButton(index)}
      onMouseLeave={() => setShowCloseButton(-1)}
    >
      <button
        className={`bg-white w-5 h-5 pb-1 font-thin rounded-xl text-center flex justify-center items-center text-red-500 text-sm absolute right-0 ${
          index === showCloseButton ? "" : "hidden"
        }`}
        onClick={() => handleRemove(index)}
      >
        X
      </button>
      <img className="w-40 mx-auto" src={imageName} alt="" />
    </div>
  );
}
