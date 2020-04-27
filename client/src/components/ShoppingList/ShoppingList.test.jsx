import React from 'react';
import ShoppingList from './ShoppingList';
import { render, fireEvent } from '@testing-library/react';

describe("ShoppingList component", () => {   
    it("renders without crashing", () => {     
        render(<ShoppingList />);   
    }); 
});
