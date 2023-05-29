import React, { Component } from "react";

export default class Component5 extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    data: [],
  };
  formSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const formData = {
      name,
      email,
      password,
    };
    this.setState((pv) => ({ data: [...pv.data, formData] }));
    this.setState({ name: "", email: "", password: "" });
  };

  onInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.formSubmit}>
        <h2>Component5</h2>
        <input
          onChange={this.onInputChange}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
        />
        <input
          onChange={this.onInputChange}
          value={this.state.email}
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
        />
        <input
          onChange={this.onInputChange}
          value={this.state.password}
          type="text"
          name="password"
          placeholder="Password"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
