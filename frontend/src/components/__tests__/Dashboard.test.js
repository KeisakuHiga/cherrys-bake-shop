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

import Dashboard from "../Dashboard/Dashboard";

describe("<Dashboard />", () => {

  it('test', () => {
    const wrapper = render(
      <Dashboard />
    )
    expect(wrapper).toMatchSnapshot()
  })
});