import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';


describe('<App />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
