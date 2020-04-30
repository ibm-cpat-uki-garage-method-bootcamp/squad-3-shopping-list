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

    afterEach(()=> {
        window.localStorage.clear();
    });

    it("renders without crashing", () => {
        render(<ShoppingList />);
    });

    it('shows a list with three items', function () {
        expect(wrapper.find(ShoppingItem)).toHaveLength(3);
    });

    it('shows the initial contents of the list', function () {
        expect(wrapper.find('label').at(0).text()).toEqual("Milk");
        expect(wrapper.find('label').at(1).text()).toEqual("Banana");
        expect(wrapper.find('label').at(2).text()).toEqual("Apple");
    });

    it('shows a form with label, text-box and button', function () {
        expect(wrapper.find('form')).toHaveLength(1);
        const form =  wrapper.find('form').at(0)
        expect(form.find('label')).toHaveLength(1);
        expect(form.find('label').at(0).text()).toEqual("Item:");
        expect(form.find('input')).toHaveLength(1);
        expect(form.find('input').prop("value")).toBeFalsy();
        expect(form.find('input').at(0).prop("type")).toEqual("text");
        expect(form.find('button')).toHaveLength(1);
        expect(form.find('button').at(0).text()).toEqual("Add Item");
    });

    describe("When the text is changed", () => {
        beforeEach(() => {
            let textBox = wrapper.find("form input").at(0);
            textBox.simulate("change", { target: { value: "Test" } });
        });

        it("renders the changed text", function() {
            let textBox = wrapper.find("form input").at(0)
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
                expect(wrapper.find('label').at(3).text()).toEqual("Test");
            });

        //     it("stores the items in local storage", () => {
        //         const items = window.localStorage.getItem("jeff");
        //         expect(items).toEqual(JSON.stringify([
        //     {
        //         name:"Milk",
        //         checked:false
        //     },
        //     {
        //         name:"Banana",
        //         checked:false
        //     },
        //     {
        //         name:"Apple",
        //         checked:false
        //     },
        //     {
        //         name:"Test",
        //         checked:false
        //     }
        // ]));
        //     });

            it("shows the same items when rendering the component again", () => {
                wrapper = mount(<ShoppingList />);
                expect(wrapper.find(ShoppingItem)).toHaveLength(4);
            });
        });


        describe("When the text is changed again", () => {
            beforeEach(() => {
                let textBox = wrapper.find("form input").at(0);
                textBox.simulate("change", { target: { value: "Test2" } });
            });

            it("renders the changed text", function() {
                let textBox = wrapper.find("form input").at(0)
                expect(textBox.prop("value")).toEqual("Test2");
            });

            describe("When the form is submitted", () => {    
                beforeEach(() => {
                    let form = wrapper.find("form").at(0);
                    form.simulate("submit");
                });

                it("shows a new item", function() {
                    expect(wrapper.find(ShoppingItem)).toHaveLength(4);
                    expect(wrapper.find('label').at(3).text()).toEqual("Test2");
                });
    
                it("stores the items in local storage", () => {
                    const items = window.localStorage.getItem("jeff");
                    expect(items).toEqual(JSON.stringify(["Milk", "Banana", "Apple", "Test2"]));
                });

                it("should clear the text box", () => {
                    let textBox = wrapper.find("form input").at(0)
                    expect(textBox.prop("value")).toEqual("");
                });
            });    
        });
    });

    describe('when an item is checked', () => {
        beforeEach(()=> {
            let checkbox = wrapper.find(ShoppingItem).at(1).find("input").first();
            checkbox.simulate("click");
        });

        // it("checks the item", () => {
        //     let checkbox = wrapper.find(ShoppingItem).at(1).find("input").first();
        //     expect(checkbox.prop("checked")).toBeTruthy();
        // });

        // it("stores item as checked in local storage", () => {
        //     const items = window.localStorage.getItem("jeff");
        //     expect(items).toEqual(JSON.stringify(["Milk", "Banana", "Apple", "Test"]));
        // });
    })
});
