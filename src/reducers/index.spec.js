import combinedReducer from './index'

describe('issueReducer', () => {
  let action;

  it('should return initial data', () => {
    action = {
      type: 'default'
    }
    expect(combinedReducer(undefined, action).issuesData).toEqual({
      "comments": [],
      "fetching": true,
      "issues": [],
      "lastPage": 0,
      "selectedIssue": null
    });
  });

});
