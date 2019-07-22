import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon, { spy } from "sinon";

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// import chai, { expect } from "chai";
// import sinonChai from "sinon-chai";
// chai.use(sinonChai)

import TableBody from "../Dashboard/TableBody/TableBody"

describe("<TableBody />", () => {
  
  let passedData = {
    _id: 'dlakjkakl;akl15678dja',
    user: {
      userName:{ firstName: '', lastName: '' },
      contact: { phoneNumber: ''},
      pickUpDateAndTime: '',
      createdAt: ''
    }
  }

  it('renders component when there is no data', () => {
    const wrapper = shallow(<TableBody data={passedData} />)
    expect(wrapper).toMatchSnapshot()
  })

  passedData = {
    _id: '194jdalk1l2lda1jk1',
    user: {
      userName:{ firstName: 'John', lastName: 'Smith' },
      contact: { phoneNumber: '0456753913'},
      pickUpDateAndTime: '2019-08-08T12:30',
      createdAt: '2019-08-01T10:50'
    }
  }
  it('renders component when there is a quotes data', () => {
    const wrapper = shallow(<TableBody data={passedData} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("correctly formats the first name", () => {
    const wrapper = shallow(<TableBody data={passedData} />)
    const text = wrapper.find(".firstName").text();
    expect(text).toEqual('John');
  });

  it("correctly formats the last name", () => {
    const wrapper = shallow(<TableBody data={passedData} />)
    const text = wrapper.find(".lastName").text();
    expect(text).toEqual('Smith');
  });

  it("correctly formats the phone number", () => {
    const wrapper = shallow(<TableBody data={passedData} />)
    const text = wrapper.find(".phoneNumber").text();
    expect(text).toEqual('0456753913');
  });

  // it("correctly formats the pick up time and date", () => {
  //   const wrapper = render(<Moment />)
  //   const text = wrapper.find(".pickUpDateAndTime").text();
  //   expect(text).toEqual('Aug 08, 2019 12:30 PM');
  // });
});

