import React, { Component } from "react";

export default class Component1 extends Component {
  render() {
    const { name, surname } = this.props.user;
    const fullName = `${name}  ${surname}`;

    const { items, sortBy } = this.props;
    const itemsCount = items.length;

    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "n") return a.n - b.n;
      else if (sortBy === "s") return a.s - b.s;
    });

    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>Component1</div>
        <h3> {fullName}</h3>
        <ul>
          <h3>Length: {itemsCount}</h3>
          {items.map((item, index) => (
            <li key={index}>
              <h4>{item.n}</h4>
              <h4>{item.s}</h4>
            </li>
          ))}
          <h4>sorted items</h4>
          {sortedItems.map((item, index) => (
            <li key={index}>
              {item.n} | {item.s}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
