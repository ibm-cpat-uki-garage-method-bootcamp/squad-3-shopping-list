import React, { Component } from "react";

class ShoppingItem extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    };

    render() {
        let {name} = this.props;

        return (
          <div>{name}</div>
        );
    }
}

export default ShoppingItem;