import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Pagination } from 'antd';
import IssueItem from '../components/IssueItem';
import { getIssues } from '../actions';

export class IssuesPage extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }

  handlePaginationClick = (page) => {
    this.props.getIssues(page)
  }

  renderListItem = (item) => {
    return (<List.Item><IssueItem data={item} /></List.Item>);
  }

  render () {
    const { issues, lastPage } = this.props;
    return (
      <React.Fragment>
        <List
          bordered
          dataSource={issues}
          renderItem={this.renderListItem}
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

export const mapStateToProps = (state) => ({
  issues: state.issuesData.issues,
  lastPage: state.issuesData.lastPage,
});

export default connect(
  mapStateToProps,
  { getIssues }
)(IssuesPage);
