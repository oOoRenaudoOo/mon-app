// import "./css/App.css"; <= utilisation styles de tailwindcss (index.css)

// composant fonctionnel

import React, { useEffect, useRef, useState } from "react";
import Picture from "./components/Picture";

function App() {
  const [title, setTile] = useState("Coucou les amis");
  const [show, setShow] = useState(false);
  const isShowInitialise = useRef(false);

  useEffect(() => {
    console.log("composant App monte");
  }, []);

  useEffect(() => {
    if (isShowInitialise.current) {
      console.log("show mis a jour");
    } else {
      isShowInitialise.current = true;
    }
  }, [show]);

  function handleCick() {
    setShow(!show);
  }

  return (
    <div>
      {console.log("render App")}
      <h1 className="text-4xl text-purple-700 my-5">{title}</h1>
      <button
        className="bg-purple-900 text-white rounded py-2 px-3"
        onClick={handleCick}
      >
        Click
      </button>
      {show ? <Picture /> : null}
    </div>
  );
}

// class composant
// import React from "react";
// import Picture from "./components/Picture";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: false, title: "Coucou Les amis" };

//     console.log("constructeur appele");
//   }

//   componentDidMount() {
//     console.log("composant App monte");
//     // this.setState({ title: "le composant a bien ete monte" });
//   }

//   componentDidUpdate() {
//     console.log("composant App mis a jour");
//   }

//   render() {
//     console.log("render appele");
//     return (
//       <div>
//         <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
//         <button
//           className="bg-purple-900 text-white rounded py-2 px-3"
//           onClick={() => this.setState({ show: !this.state.show })}
//         >
//           Click
//         </button>

//         {this.state.show ? <Picture /> : null}
//       </div>
//     );
//   }
// }

export default App;
