import React, { Component } from "react";
import ShoppingItem from '../ShoppingItem/ShoppingItem'

class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {};
        
    };

    render() {

        return (
          <div>
            <ShoppingItem name={'Milk'}/>
            <ShoppingItem name={'Banana'}/>
            <ShoppingItem name={'Apple'}/>
          </div>
        );
    }
}

export default ShoppingList;
