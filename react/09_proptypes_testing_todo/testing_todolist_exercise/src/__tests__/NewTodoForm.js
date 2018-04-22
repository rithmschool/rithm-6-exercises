import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewTodoForm from '../NewTodoForm';

describe('<NewTodoForm />', () => {
  let wrapper;

  it('render', () => {
    wrapper = shallow(<NewTodoForm />);
  });

  it('matches snapshot', () => {
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  })

})

