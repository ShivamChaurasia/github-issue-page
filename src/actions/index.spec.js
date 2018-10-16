import * as actions from './index';
import issuesAPIs from '../api/issues';

import { getLastPageNumber, timeSince } from './index'

describe('actions', () => {

  let dispatch = jest.fn();

  it('receiveIssues should return the action object', () => {
    expect(actions.receiveIssues([1, 2])).toEqual({"issues": [1, 2], "type": "RECEIVE_ISSUES"});
  });
  
  it('updateMetaData should return the action object', () => {
    expect(actions.updateMetaData([1, 2])).toEqual({"payload": [1, 2], "type": "UPDATE_METADATA"});
  });
  
  it('getIssues should return the action object', () => {
    expect(actions.getIssues());
  });
  
  it('getIssues should return the action object', () => {
    issuesAPIs.getIssues = jest.fn(() => Promise.resolve({
      headers: {
        link: '<https://api.github.com/repositories/10270250/issues?page=2>; rel="next", <https://api.github.com/repositories/10270250/issues?page=14>; rel="last"'
      },
      data: {}
    }));
    expect(actions.getIssues(2)(dispatch));
  });
  
  it('getIssueDetails should return the action object', () => {
    issuesAPIs.getIssueDetails = jest.fn(() => Promise.resolve({}));
    expect(actions.getIssueDetails(2)(dispatch));
  });
  
  it('getIssueComments should return the action object', () => {
    issuesAPIs.getIssueComments = jest.fn(() => Promise.resolve({}));
    expect(actions.getIssueComments(2)(dispatch));
  });

});
