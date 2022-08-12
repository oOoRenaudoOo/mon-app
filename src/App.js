// import "./css/App.css";

// composant fonctionnel
// function App({ title }) {
//   return <h1 className="text-center text-blue-500 text-3xl">{title}</h1>;
// }

// composant class
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    return (
      <div>
        <button
          class="bg-purple-900 text-white rounded py-2 px-3"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Click
        </button>

        {this.state.show ? (
          <img class="w-40 mx-auto" src="logo192.png" alt="" />
        ) : null}
      </div>
    );
  }
}

export default App;
