import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Component2 extends Component {
  // componentDidMount() {
  //   ReactDOM.findDOMNode(this.refs.name).focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.refs;

    console.log(this.refs);
    const user = {
      name: ReactDOM.findDOMNode(name).value,
      email: ReactDOM.findDOMNode(email).value,
      password: ReactDOM.findDOMNode(password).value,
    };
    console.log(user);
  };

  render() {
    return (
      <div>
        <h2>Component2 - Ex 2</h2>
        <section>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              ref="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <input type="email" name="email" ref="email" required />
            <input type="password" name="password" ref="password" required />
            <button>Submit</button>
          </form>
        </section>
      </div>
    );
  }
}
