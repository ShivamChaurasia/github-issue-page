import * as types from '../constants/ActionTypes';

const initialState = {
  fetching: true,
  issues: [],
  lastPage: 0,
  selectedIssue: null,
  comments: [],
}

const issues = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_ISSUES:
      return {
        ...state,
        fetching: false,
        issues: action.issues,
      }
    case types.UPDATE_METADATA:
      return {
        ...state,
        lastPage: action.payload,
      }
    case types.SET_SELECTED_ISSUE_DATA:
      return {
        ...state,
        fetching: false,
        selectedIssue: action.payload,
      }
    case types.SET_SELECTED_ISSUE_COMMENTS:
      return {
        ...state,
        fetching: false,
        comments: action.payload,
      }
    default:
      return state;
  }
}

export default issues;
