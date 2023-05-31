import React, { Component } from "react";

const users = [
  { name: "John", age: 10 },
  { name: "Mike", age: 13 },
  { name: "Andryi", age: 20 },
];

export default class Component8 extends Component {
  state = {
    sortValue: "",
    searchValue: "",
  };

  sortChange = (e) => {
    this.setState({ sortValue: e.target.value });
  };
  searchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const { sortValue, searchValue } = this.state;
    const value = parseFloat(searchValue);

    const sorterdUsers = [...users].sort((a, b) => {
      if (sortValue === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortValue === "age") {
        return a.age - b.age;
      } else {
        return users;
      }
    });

    const foundUsers = users.filter((user) => {
      if (!isNaN(value)) {
        return user.age === value;
      } else {
        return user.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      }
    });

    return (
      <div>
        <h2>Component8</h2>
        <div>
          <h3>Sort</h3>
          <select name="filter" value={sortValue} onChange={this.sortChange}>
            <option value="">без сортування</option>
            <option value="name"> сортування Ім'я</option>
            <option value="age"> сортування Вік</option>
          </select>

          <ul>
            {sorterdUsers.map((user, index) => (
              <li key={index}>
                <h2>{user.name}</h2>

                <h2>{user.age}</h2>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Find</h3>
          <input
            value={searchValue}
            onChange={this.searchChange}
            type="text"
            placeholder="enter some for search"
          />

          {foundUsers.length > 0 ? (
            <ul>
              {foundUsers &&
                foundUsers.map((user, index) => (
                  <li key={index}>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                  </li>
                ))}
            </ul>
          ) : (
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  <h2>{user.name}</h2>
                  <h2>{user.age}</h2>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
