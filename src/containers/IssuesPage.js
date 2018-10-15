import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Pagination } from 'antd';
import IssueItem from '../components/IssueItem';
import { getIssues } from '../actions';

class IssuesPage extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }

  handlePaginationClick = (page) => {
    this.props.getIssues(page)
  }

  render () {
    const { issues, lastPage } = this.props;
    return (
      <React.Fragment>
        <List
          bordered
          dataSource={issues}
          renderItem={item => (<List.Item><IssueItem data={item} /></List.Item>)}
        />
        <div className="pagination-wrapper">
          <Pagination
            pageSize={30}
            defaultCurrent={1}
            total={lastPage * 30}
            onChange={this.handlePaginationClick}
          />
        </div>
      </React.Fragment>
    )
  }
}

IssuesPage.propTypes = {
  issues: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  issues: state.issuesData.issues,
  lastPage: state.issuesData.lastPage,
});

export default connect(
  mapStateToProps,
  { getIssues }
)(IssuesPage);
