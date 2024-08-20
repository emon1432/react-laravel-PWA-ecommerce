import React, { Component } from "react";

class Hello extends Component {
  state = {
    friends: [
      { name: "naim", age: 25 },
      { name: "bappy", age: 26 },
      { name: "raju", age: 27 },
      { name: "prince", age: 28 },
    ],
  };

  clickFunction = () => {
    this.setState({
      friends: [
        { name: "NAIM", age: 25 },
        { name: "BAPPY", age: 26 },
        { name: "RAJU", age: 27 },
        { name: "PRINCE", age: 28 },
      ],
    });
  };

  render() {
    return (
      <>
        <button onClick={this.clickFunction}>Click</button>
        <h1>Friend 1: {this.state.friends[0].name}</h1>
        <h1>Friend 2: {this.state.friends[1].name}</h1>
        <h1>Friend 3: {this.state.friends[2].name}</h1>
        <h1>Friend 4: {this.state.friends[3].name}</h1>
      </>
    );
  }
}

export default Hello;
