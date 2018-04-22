import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from '../TodoList';

describe('<TodoList />', () => {

  let wrapper;

  it('renders', () => {
    wrapper = shallow(<TodoList />);
  });

  it('matches snapshot', () => {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

});
