import issuesAPIs from '../api/issues';
import { getLastPageNumber } from '../util';
import * as types from '../constants/ActionTypes';

const receiveIssues = issues => ({
  type: types.RECEIVE_ISSUES,
  issues,
});

const updateMetaData = payload => ({
  type: types.UPDATE_METADATA,
  payload,
});

export const getIssues = (page = 1) => (dispatch) => {
  issuesAPIs.getIssues(page).then((issues) => {
    dispatch(updateMetaData(getLastPageNumber(issues.headers.link)));
    dispatch(receiveIssues(issues.data));
  });
};

const setSelectedIssueData = payload => ({
  type: types.SET_SELECTED_ISSUE_DATA,
  payload,
});

export const getIssueDetails = issueNumber => (dispatch) => {
  issuesAPIs.getIssueDetails(issueNumber).then((data) => {
    dispatch(setSelectedIssueData(data));
  });
};

const setSelectedIssueComments = payload => ({
  type: types.SET_SELECTED_ISSUE_COMMENTS,
  payload,
});

export const getIssueComments = issueNumber => (dispatch) => {
  issuesAPIs.getIssueComments(issueNumber).then((data) => {
    dispatch(setSelectedIssueComments(data));
  });
};