import { shallow } from "enzyme";
import Counter from "./Counter";
import React from "react";

it("expect to render Counter component", () => {

    const mockColor = "red"
   
    expect(shallow(<Counter color={mockColor}/>)).toMatchSnapshot()

})


it("correctly increments the", () => {

    const mockColor = "red"
    const wrapper = shallow(<Counter color={mockColor}/>);

    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual("red");


})
