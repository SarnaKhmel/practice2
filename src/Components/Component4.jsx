import React, { Component } from "react";

export default class Component4 extends Component {
  constructor() {
    super();
    this.state = {
      degree: 0,
    };

    setInterval(this._tic.bind(this), 50);
  }
  _tic() {
    if (this.state.degree < 360) {
      this.setState({ degree: this.state.degree + 1 });
    } else this.setState({ degree: 0 });
  }
  render() {
    return (
      <div>
        <h2>
          Component4 - ex 4<div></div>
        </h2>
        <div
          className="loader"
          style={{ transform: `rotate(${this.state.degree}deg)` }}>
          <div>⬆</div>

          <div className="degree">{this.state.degree}</div>
        </div>
      </div>
    );
  }
}
