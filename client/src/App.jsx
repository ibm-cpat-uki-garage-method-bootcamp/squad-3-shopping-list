import React, { Component } from "react";
import "./App.scss";
import ShoppingList from "./components/ShoppingList/ShoppingList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList />
      </div>
    );
  }
}

export default App;
