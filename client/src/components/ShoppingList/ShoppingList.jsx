import React, { Component } from "react";

class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {};
        
    };

    render() {
        return (
          <div>
            <div className="shoppingItem">Milk</div>
            <div className="shoppingItem">Banana</div>
            <div className="shoppingItem">Apple</div>
          </div>
        );
    }
}

export default ShoppingList;
