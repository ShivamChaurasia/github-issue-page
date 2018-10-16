import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

describe('App', () => {

  it('renders component correctly', () => {
    const wrapper = shallow(<App fetching />);
    expect(wrapper.find('Loader').length).toBe(1);
  });
  
  it('mapStateToProps should read props from state', () => {
    const props = mapStateToProps({
      issuesData: {
        fetching: true
      }
    });
    expect(props).toEqual({"fetching": true});
  });

});