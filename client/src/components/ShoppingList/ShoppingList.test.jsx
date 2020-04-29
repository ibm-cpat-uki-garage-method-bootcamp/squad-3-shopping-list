import React from 'react';
import ShoppingList from './ShoppingList';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("ShoppingList component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ShoppingList />);
    });

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

    it('shows a form with label, text-box and button', function () {
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('label').at(0).text()).toEqual("Item:");
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('input').prop("value")).toBeFalsy();
        expect(wrapper.find('input').at(0).prop("type")).toEqual("text");
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').at(0).text()).toEqual("Add Item");
    });

    describe("When the text is changed", () => {
        beforeEach(() => {
            let textBox = wrapper.find("input").at(0);
            textBox.simulate("change", { target: { value: "Test" } });
        });

        it("renders the changed text", function() {
            let textBox = wrapper.find("input").at(0)
            expect(textBox.prop("value")).toEqual("Test");
        });
        
        describe("When the form is submitted", () => {
            let preventDefault;

            beforeEach(() => {
                preventDefault = jest.fn()
                let form = wrapper.find("form").at(0);
                form.simulate("submit", { preventDefault });
            });

            it("calls preventDefault", function() {
                expect(preventDefault).toHaveBeenCalled();
            });

            it("shows a new item", function() {
                expect(wrapper.find(ShoppingItem)).toHaveLength(4);
                expect(wrapper.find(ShoppingItem).at(3).text()).toEqual("Test");
            });
        });


        describe("When the text is changed again", () => {
            beforeEach(() => {
                let textBox = wrapper.find("input").at(0);
                textBox.simulate("change", { target: { value: "Test2" } });
            });

            it("renders the changed text", function() {
                let textBox = wrapper.find("input").at(0)
                expect(textBox.prop("value")).toEqual("Test2");
            });

            it("shows a new item when the form is submitted", function() {
                let form = wrapper.find("form").at(0);
                form.simulate("submit");
                expect(wrapper.find(ShoppingItem)).toHaveLength(4);
                expect(wrapper.find(ShoppingItem).at(3).text()).toEqual("Test2");
            });    
        });
    });
});
