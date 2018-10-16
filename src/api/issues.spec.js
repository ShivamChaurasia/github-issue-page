import issuesAPIs from './issues';
import axios from './config';

describe('issuesAPIs', () => {
  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve({ }));
  });

  it('getIssueDetails should return the action object', () => {
    expect(issuesAPIs.getIssues()).toBeTruthy();
  });
  it('getIssueDetails should return the action object', () => {
    expect(issuesAPIs.getIssueDetails()).toBeTruthy();
  });
  it('getIssueDetails should return the action object', () => {
    expect(issuesAPIs.getIssueComments()).toBeTruthy();
  });
  
  it('getIssueDetails should return the action object', () => {
    axios.get = jest.fn(() => Promise.reject({ }));
    expect(issuesAPIs.getIssues()).toBeTruthy();
  });
  it('getIssueDetails should return the action object', () => {
    axios.get = jest.fn(() => Promise.reject({ }));
    expect(issuesAPIs.getIssueDetails()).toBeTruthy();
  });
  it('getIssueDetails should return the action object', () => {
    axios.get = jest.fn(() => Promise.reject({ }));
    expect(issuesAPIs.getIssueComments()).toBeTruthy();
  });

});
