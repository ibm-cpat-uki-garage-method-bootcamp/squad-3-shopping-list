import React from "react";
import ShoppingItem from "./ShoppingItem";
import { shallow, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("ShoppingItem component", () => {
  it("renders without crashing", () => {
    render(<ShoppingItem />);
  });

  it("renders as an div", () => {
    let wrapper = shallow(<ShoppingItem />);
    expect(wrapper.type()).toBe("div");
    expect(wrapper.childAt(0).type()).toBe("input");
    expect(wrapper.childAt(1).type()).toBe("label");
  });

  it("renders as an input with type checkbox", () => {
    let wrapper = shallow(<ShoppingItem />);
    expect(wrapper.childAt(0).type()).toBe("input");
    expect(wrapper.childAt(0).prop("type")).toBe("checkbox");
  });

  it("should render the name of the item", () => {
    for (name of ["Milk", "Butter"]) {
      let wrapper = shallow(<ShoppingItem name={name} />);
      expect(wrapper.childAt(0).prop("value")).toEqual(name);
      expect(wrapper.childAt(1).text()).toEqual(name);
    }
  });

  it("should render the name of the item for checked item", () => {
    for (name of ["Milk", "Butter"]) {
      let wrapper = shallow(<ShoppingItem name={name} check="true" />);
      expect(wrapper.childAt(0).prop("value")).toEqual(name);
      expect(wrapper.childAt(1).text()).toEqual(name);
    }
  });

  it("should render a checkbox for an item", () => {
    let wrapper = shallow(<ShoppingItem name="Milk" check={true} />);
    expect(wrapper.childAt(0).prop("checked")).toBeTruthy();
  });

  it("should not render a checkbox for an item that is not checked", () => {
    let wrapper = shallow(<ShoppingItem name="Milk" check={false} />);
    expect(wrapper.childAt(0).prop("checked")).toBeFalsy();
  });
});
