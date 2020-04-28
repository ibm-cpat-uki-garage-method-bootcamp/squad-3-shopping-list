import React, { Component } from "react";

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { name } = this.props;
    let { check } = this.props;

    return (
      <div>
        <input type="checkbox" value={name} checked={check} />
        <label>{name}</label>
      </div>
    );
  }
}

export default ShoppingItem;
