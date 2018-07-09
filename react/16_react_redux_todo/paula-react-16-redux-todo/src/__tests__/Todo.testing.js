import React from "react"; // for JSX
import { shallow, mount } from "enzyme"; // how to mount the component
import { MemoryRouter } from "react-router-dom";
import toJson from "enzyme-to-json"; // for snapshotting the component
import Todo from "../containers/Todo"; // import the component itself

describe("<Todo />", () => {
  let wrapper;
  it("renders", () => {
    // smoke test!!!
    wrapper = shallow(<Todo>hello world</Todo>);
  });
});

describe("<Todo />", () => {
  it("renders", () => {
    let wrapper = shallow(<Todo />);
    console.log(wrapper.debug());
  });
});

describe("<Todo />", () => {
  it("renders", () => {
    let wrapper = mount(<Todo />);
    console.log(wrapper.debug());
  });
});

describe("<Todo />", () => {
  let wrapper;
  it("renders", () => {
    // smoke test!!!
    wrapper = shallow(<Todo>hello world</Todo>);
  });

  it("matches snapshot", () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});

describe("<Todo />", () => {
  let wrapper;
  it("renders", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[{ key: "testKey" }]}>
        <Todo />
      </MemoryRouter>
    );
  });

  it("matches snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
