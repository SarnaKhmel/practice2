import React, { Component } from "react";

export default class h2 extends Component {
  state = {
    todos: [],
    inputValue: "",
  };

  inputChanges = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    const { inputValue, todos } = this.state;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTodo],
      inputValue: "",
    });
  };

  delTodo = (id) => {
    const { todos } = this.state;
    const updateTodo = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updateTodo });
  };

  completeTodo = (id) => {
    const { todos } = this.state;
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    this.setState({ todos: updateTodo });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <h2>Component6 - TODO </h2>
        <br />
        <div>
          <h4>Add todo:</h4>
          <form onSubmit={this.addTodo}>
            <input
              value={this.state.inputValue}
              type="text"
              placeholder="Add todo"
              name="todo"
              onChange={this.inputChanges}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <div>
          <h4>Todo List:</h4>
          <ul>
            {this.state.todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    this.completeTodo(todo.id);
                  }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}>
                  {todo.text}
                </span>
                <button
                  onClick={() => {
                    this.delTodo(todo.id);
                  }}>
                  Del
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
