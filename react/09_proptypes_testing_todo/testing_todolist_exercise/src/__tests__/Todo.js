import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from '../Todo';

describe('<Todo />', () => {

  let wrapper;

  it('renders', () => {
    wrapper = mount(<Todo />);
  });

  it('matches snapshot', () => {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  })

})
