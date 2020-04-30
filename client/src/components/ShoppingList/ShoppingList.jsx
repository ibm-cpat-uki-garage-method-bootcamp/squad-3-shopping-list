import React, { Component } from "react";
import ShoppingItem from '../ShoppingItem/ShoppingItem'
import ShoppingListStorage from "./ShoopingListStorage"

class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.storage = new ShoppingListStorage();
      this.state = {
        items: this.storage.retrieve('jeff'),
        prov: "",
      };
    };

    handleChange = (e) => {
      this.setState({
        prov: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const items = [...this.state.items, this.state.prov]
      this.setState({
        items
      })
      this.storage.store('jeff', items);
    }

    render() {
      const listOfItems = this.state.items.map((name, idx) => {
        return <ShoppingItem key={idx} name={name} />
      })
      return (
        <div>
          {listOfItems}
          <form onSubmit={this.handleSubmit}>
            <label>Item:</label>
            <input type="text" value={this.state.prov} onChange={this.handleChange} />
            <button>Add Item</button>
          </form>
        </div>
      );
  }

}

export default ShoppingList;
