import axios from './config';

export default {
  getIssues: (page) =>
    axios
      .get(`/repos/facebook/react/issues?page=${page}`)
      .then(response => response)
      .catch(error => error),
  getIssueDetails: (number) =>
    axios
      .get(`/repos/facebook/react/issues/${number}`)
      .then(response => response.data)
      .catch(error => error),
  getIssueComments: (number) =>
    axios
      .get(`/repos/facebook/react/issues/${number}/comments`)
      .then(response => response.data)
      .catch(error => error),
};

