import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 4
    };
  }

  handel = () => {
    this.setState({ timer: this.state.timer + 1 });
  }

  handleDecrease = () => {
    if (this.state.timer > 0) {
      this.setState({ timer: this.state.timer - 1 });
    }
  }

  handleMultiply = () => {
    const input = prompt("Введите число для умножения:");
    if (input !== null) {
      const num = parseFloat(input);
      if (!isNaN(num)) {
        this.setState({ timer: this.state.timer * num });
      }
    }
  }

  handleDivision = () => {
    const input = prompt("Введите число для деления:");
    if (input !== null) {
      const num = parseFloat(input);
      if (!isNaN(num) && num !== 0) {
        this.setState({ timer: Math.floor(this.state.timer / num) });
      } else if (num === 0) {
        alert("На ноль делить нельзя!");
      }
    }
  }

  handleAddTen = () => {
    this.setState({ timer: this.state.timer + 10 });
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <h2>{this.state.timer}</h2>

        <button onClick={this.handel}>Click +</button>
        <button onClick={this.handleDecrease}>Click -</button>
        <button onClick={this.handleMultiply}>Multiply</button>
        <button onClick={this.handleDivision}>Division</button>
        <button onClick={this.handleAddTen}>Add 10</button>
      </div>
    );
  }
}

export default MyComponent;
