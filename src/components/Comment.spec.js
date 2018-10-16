import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

it('renders component correctly', () => {
  const wrapper = shallow(<Comment data={{
    user: {
      avatar_url: 'image_url',
      login: 'test'
    }
  }}/>);
  expect(wrapper.find('Card').length).toBe(1);
});