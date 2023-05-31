import React, { Component } from "react";
// import Component1 from "./Components/Component1";
// import Component2 from "./Components/Component2";
// import Component3 from "./Components/Component3";
// import Component4 from "./Components/Component4";
// import Component5 from "./Components/Component5";
// import Component6 from "./Components/Component6";
import Component7 from "./Components/Component7";
import Component8 from "./Components/Component8";

import "./App.css";

const items = [
  { n: 4, s: 90 },
  { n: 32, s: 2 },
  { n: 4, s: 30 },
  { n: 70, s: 7 },
];

const user = {
  name: "John",
  surname: "Smith",
};

export default class App extends Component {
  render() {
    return (
      <>
        {/* <div className="layout">
          <Component1
            title="Component 1 - Ex 1"
            items={items}
            user={user}
            sortBy="s"
          />
        </div>
        <div className="layout">
          <Component2 />
        </div>
        <div className="layout">
          <Component3 />
        </div>
        <div className="layout">
          <Component4 />
        </div>
         <div className="layout">
          <Component5 />
        </div>
        <div className="layout">
          <Component6 />
        </div>
         <div className="layout">
          <Component7 />
        </div> */}

        <div className="layout">
          <Component8 />
        </div>
      </>
    );
  }
}
