import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {

  it('renders component correctly', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('Spin').length).toBe(1);
  });

});