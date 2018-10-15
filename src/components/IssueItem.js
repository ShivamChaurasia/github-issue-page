import React from 'react';
import { Icon } from 'antd';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';

const IssueItem = ({ data }) => {
  return (
    <Row gutter={16} style={{width: '100%'}} >
      <Col lg={1} xs={2}>
        <Icon type="info-circle" theme="outlined" style={{color: '#28a745'}}/>
      </Col>
      <Col lg={21} xs={18}>
        <div className="issue-title">
          <NavLink to={`/issue/${data.number}`} title={data.title}>{data.title}</NavLink>
        </div>
        <div>#{data.number} {data.state}ed by {data.user.login}</div>
      </Col>
      <Col lg={2} xs={4}>
        <svg
          className="octicon octicon-comment v-align-middle"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"
          />
        </svg> <span className="comments-count">{data.comments}</span>
      </Col>
    </Row>
  )
}

export default IssueItem;
