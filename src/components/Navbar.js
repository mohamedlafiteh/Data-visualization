import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Data visualization</h1>
      </header>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};


export default Navbar;
