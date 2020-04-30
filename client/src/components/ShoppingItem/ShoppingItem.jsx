import React, { Component } from "react";

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { name, check } = this.props;

    return (
      <div>
        <input type="checkbox" value={name} checked={check} />
        <label>{name}</label>
        <button>x</button>
      </div>
    );
  }
}

export default ShoppingItem;
