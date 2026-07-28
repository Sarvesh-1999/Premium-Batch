import React, { Component } from "react";

export default class LifeCycleInCBC extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("Component mounted");
    this.id = setInterval(() => console.log("API Called"), 2000);
  }

  componentDidUpdate() {
    console.log("Componnet updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    clearInterval(this.id);
  }

  increment = () =>
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });

  render() {
    return (
      <div>
        <h1>LifeCycleInCBC {this.state.count}</h1>
        <button onClick={this.increment}>incre</button>
      </div>
    );
  }
}
