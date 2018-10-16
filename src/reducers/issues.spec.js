import issueReducer from './issues'

describe('issueReducer', () => {
  let action;

  it('should return initial data', () => {
    action = {
      type: 'default'
    }
    expect(issueReducer(undefined, action)).toEqual({
      "comments": [],
      "fetching": true,
      "issues": [],
      "lastPage": 0,
      "selectedIssue": null
    });
  });

  it('should populate issues when RECEIVE_ISSUES is called', () => {
    action = {
      type: 'RECEIVE_ISSUES',
      issues: [1, 2]
    }
    expect(issueReducer(undefined, action).issues).toEqual([1, 2]);
  });
  
  it('should populate lastPage when UPDATE_METADATA is called', () => {
    action = {
      type: 'UPDATE_METADATA',
      payload: 10
    }
    expect(issueReducer(undefined, action).lastPage).toEqual(10);
  });
  
  it('should update selectedIssue when SET_SELECTED_ISSUE_DATA is called', () => {
    action = {
      type: 'SET_SELECTED_ISSUE_DATA',
      payload: {id: 10}
    }
    expect(issueReducer(undefined, action).selectedIssue).toEqual({id: 10});
  });
  
  it('should update comments when SET_SELECTED_ISSUE_COMMENTS is called', () => {
    action = {
      type: 'SET_SELECTED_ISSUE_COMMENTS',
      payload: [1, 2, 3]
    }
    expect(issueReducer(undefined, action).comments.length).toEqual(3);
  });

});
