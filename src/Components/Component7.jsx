import React, { Component } from "react";

import toast, { Toaster } from "react-hot-toast";

export default class Component7 extends Component {
  componentDidMount() {
    console.log("Компонент на екрані");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Компонент оновлено");
    if (this.state.count !== prevState.count) {
      console.log("Count оновлено-змінено");
    }
  }
  componentWillUnmount() {
    console.log("Компонент видалено з екрану");
  }
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const notify = () => toast("Here is your toast.");

    return (
      <div>
        <Toaster />
        <h2>Component7</h2>
        <div>
          <h3>Counter</h3>
          <h4>{count}</h4>
          <button type="button" onClick={this.handleClick}>
            Add 1
          </button>
          <button onClick={notify}>Make me a toast</button>
        </div>
      </div>
    );
  }
}
