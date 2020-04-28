import React from 'react';
import ShoppingItem from './ShoppingItem';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("ShoppingItem component", () => {
    let wrapper;
    // const wrapper = mount(<ShoppingItem />);

    it("renders without crashing", () => {
        render(<ShoppingItem />);
    });

    it("should render the name of the item", () => {
        for (name of ["Milk", "Butter"]) {
            wrapper = render(<ShoppingItem name={name} />);
            expect(wrapper.text()).toEqual(name);
        }
    });

});
