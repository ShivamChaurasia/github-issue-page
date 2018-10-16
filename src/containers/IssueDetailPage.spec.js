import React from 'react';
import { shallow } from 'enzyme';
import { IssueDetailPage, mapStateToProps } from './IssueDetailPage';
import IssueItem from '../components/IssueItem';
import { List } from 'antd';
const { Item } = List;

describe('IssueDetailPage', () => {
  const getIssueDetails = jest.fn();
  const getIssueComments = jest.fn();

  it('should show loader when selectedIssue is null', () => {
    const wrapper = shallow(<IssueDetailPage
      getIssueDetails={getIssueDetails}
      getIssueComments={getIssueComments}
      selectedIssue={null}
      comments={[]}
      match={{
        params: {
          issueId: 123
        }
      }}
    />);
    expect(wrapper.find('Loader').length).toBe(1);
  });

  it('renders component correctly', () => {
    const wrapper = shallow(<IssueDetailPage
      getIssueDetails={getIssueDetails}
      getIssueComments={getIssueComments}
      selectedIssue={{
        user: {}
      }}
      comments={[]}
      match={{
        params: {
          issueId: 123
        }
      }}
    />);
    expect(getIssueDetails).toHaveBeenCalled();
    expect(getIssueComments).toHaveBeenCalled();
  });
  
  it('populateComments should return comments', () => {
    const wrapper = shallow(<IssueDetailPage
      getIssueDetails={getIssueDetails}
      getIssueComments={getIssueComments}
      selectedIssue={{
        user: {}
      }}
      comments={[]}
      match={{
        params: {
          issueId: 123
        }
      }}
    />);
    const commentsArray = wrapper.instance().populateComments([1, 2, 3]);
    expect(commentsArray.length).toBe(3);
  });

  it('mapStateToProps should read props from state', () => {
    const props = mapStateToProps({
      issuesData: {
        selectedIssue: { id: 123},
        comments: [1, 2]
      }
    });
    expect(props).toEqual({"comments": [1, 2], "selectedIssue": {"id": 123}});
  });

});