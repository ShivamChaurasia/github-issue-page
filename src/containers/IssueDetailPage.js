import React from 'react';
import { Tag, Icon } from 'antd';
import PropTypes from 'prop-types';
import { timeSince } from '../util';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import Comment from '../components/Comment';
import {
  getIssueDetails,
  getIssueComments,
} from '../actions';

export class IssueDetailPage extends React.Component {
  
  componentDidMount() {
    this.props.getIssueDetails(this.props.match.params.issueId);
    this.props.getIssueComments(this.props.match.params.issueId);
  }

  populateComments(comments) {
    return comments.map( obj => <Comment key={obj.id} data={obj}/>)
  }

  render () {
    const { selectedIssue, comments } = this.props;
    if(!selectedIssue) {
      return (
        <Loader />
      )
    }
    return (
      <div className="issue-detail-page">
        <h1>{selectedIssue.title} <span className="header-number">#{selectedIssue.number}</span></h1>
        <div className="header-meta">
          <Tag color="#87d068">
            <Icon type="info-circle" theme="outlined" /> Open
          </Tag>
          <span>
            {selectedIssue.user.login} opened this issue {timeSince(new Date(selectedIssue.created_at))} ago . {comments.length} comments
          </span>
        </div>
        <Comment data={selectedIssue} />
        {this.populateComments(comments)}
      </div>
    )
  }
}

IssueDetailPage.propTypes = {
  selectedIssue: PropTypes.object,
  comments: PropTypes.array.isRequired,
};

export const mapStateToProps = (state) => ({
  selectedIssue: state.issuesData.selectedIssue,
  comments: state.issuesData.comments,
});

export default connect(
  mapStateToProps,
  { getIssueDetails, getIssueComments }
)(IssueDetailPage);
