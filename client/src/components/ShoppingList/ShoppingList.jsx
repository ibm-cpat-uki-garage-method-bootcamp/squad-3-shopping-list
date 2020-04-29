import React, { Component } from "react";
import ShoppingItem from '../ShoppingItem/ShoppingItem'

class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ['Milk', 'Banana', 'Apple'],
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
      this.setState({
        items: [...this.state.items, this.state.prov]
      })
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
