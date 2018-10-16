import React from 'react';
import { shallow } from 'enzyme';
import { IssuesPage, mapStateToProps } from './IssuesPage';
import IssueItem from '../components/IssueItem';
import { List } from 'antd';
const { Item } = List;

describe('IssuesPage', () => {
  const getIssues = jest.fn();
  it('renders component correctly', () => {
    const wrapper = shallow(<IssuesPage
      getIssues={getIssues}
      issues={[]}
    />);
    expect(getIssues).toHaveBeenCalled();
  });
  
  it('getIssues should be called on call of handlePaginationClick', () => {
    const wrapper = shallow(<IssuesPage
      getIssues={getIssues}
      issues={[]}
    />);
    wrapper.instance().handlePaginationClick(3);
    expect(getIssues).toHaveBeenCalledWith(3);
  });
  
  it('renderListItem should return List.Item', () => {
    const wrapper = shallow(<IssuesPage
      getIssues={getIssues}
      issues={[]}
    />);
    const Li = wrapper.instance().renderListItem();
    expect(Li).toEqual(<Item><IssueItem /></Item>);
  });
  
  it('mapStateToProps should read props from state', () => {
    const props = mapStateToProps({
      issuesData: {
        issues:[],
        lastPage: 12
      }
    });
    expect(props).toEqual({"issues": [], "lastPage": 12});
  });

});