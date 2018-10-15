import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IssuesPage from './IssuesPage';
import Loader from '../components/Loader';
import IssueDetailPage from './IssueDetailPage';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';

const TabPane = Tabs.TabPane;

const App = ({ fetching }) => (
  <Router>
    <main>
      {fetching && <Loader />}
      <Tabs defaultActiveKey="2">
        <TabPane tab="Code" key="1" disabled />
        <TabPane tab={<NavLink to="/issues">Issues</NavLink>} key="2">
          <Switch>
            <Route
              path="/issues"
              exact
              component={IssuesPage}
            />
            <Route
              path="/issue/:issueId"
              exact
              component={IssueDetailPage}
            />
            <Redirect to="/issues"/>
          </Switch>
        </TabPane>
      </Tabs>
    </main>
  </Router>
);

App.propTypes = {
  fetching: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  fetching: state.issuesData.fetching,
})

export default connect(
  mapStateToProps,
)(App)
