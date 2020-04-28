import React from 'react';
import ShoppingList from './ShoppingList';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("ShoppingList component", () => {
    const wrapper = mount(<ShoppingList />);

    it("renders without crashing", () => {
        render(<ShoppingList />);
    });

    it('shows a list with items', function () {
        expect(wrapper.find(ShoppingItem)).toHaveLength(3);
    });

    it('shows the contents of the list', function () {
        expect(wrapper.find(ShoppingItem).at(0).text()).toEqual("Milk");
        expect(wrapper.find(ShoppingItem).at(1).text()).toEqual("Banana");
        expect(wrapper.find(ShoppingItem).at(2).text()).toEqual("Apple");
    });

});
