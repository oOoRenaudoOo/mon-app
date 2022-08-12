import React, { Component } from "react";

export default class picture extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null };
  }

  componentDidMount() {
    console.log("composant picture monte");
    this.setState({
      timer: setInterval(() => {
        console.log("timer appele");
      }, 1000),
    });
  }

  componentWillUnmount() {
    console.log("composant picture detruit");
    clearInterval(this.state.timer);
  }

  render() {
    return <img className="w-40 mx-auto" src="logo192.png" alt="" />;
  }
}
