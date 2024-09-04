import React, { Component } from "react";

class Hello extends Component {
  state = {
    name: "React",
  };

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.changeName} value={this.state.name} />
        <h1>Hello {this.state.name}</h1>
      </>
    );
  }
}

export default Hello;
