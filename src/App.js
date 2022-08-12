// import "./css/App.css";

// composant fonctionnel
// function App({ title }) {
//   return <h1 className="text-center text-blue-500 text-3xl">{title}</h1>;
// }

// composant class
import React from "react";
import Picture from "./components/Picture";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, title: "Coucou Les amis" };

    console.log("constructeur appele");
  }

  componentDidMount() {
    console.log("composant App monte");
    // this.setState({ title: "le composant a bien ete monte" });
  }

  componentDidUpdate() {
    console.log("composant App mis a jour");
  }

  render() {
    console.log("render appele");
    return (
      <div>
        <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
        <button
          className="bg-purple-900 text-white rounded py-2 px-3"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Click
        </button>

        {this.state.show ? <Picture /> : null}
      </div>
    );
  }
}

export default App;
