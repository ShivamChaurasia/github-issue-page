import React from 'react';
import { shallow } from 'enzyme';
import IssueItem from './IssueItem';

it('NavLink\'s route should be formed correctly', () => {
  const wrapper = shallow(<IssueItem data={{
    number: '123',
    title: 'test',
    state: 'open',
    user: {
      login: 'testacc'
    }
  }}/>);
  expect(wrapper.find('NavLink').prop('to')).toBe('/issue/123');
});