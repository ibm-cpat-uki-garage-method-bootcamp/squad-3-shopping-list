import React from 'react';
import ShoppingList from './ShoppingList';
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
        expect(wrapper.find('.shoppingItem')).toHaveLength(3);
    });

    it('shows the contents of the list', function () {
        expect(wrapper.find('.shoppingItem').at(0).text()).toEqual("Milk");
        expect(wrapper.find('.shoppingItem').at(1).text()).toEqual("Banana");
        expect(wrapper.find('.shoppingItem').at(2).text()).toEqual("Apple");
    });
});
