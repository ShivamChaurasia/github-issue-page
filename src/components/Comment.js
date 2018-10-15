import React from 'react';
import { Avatar, Card } from 'antd';
import { timeSince } from '../util';

const Comment = ({ data }) => (
  <Card
    title={
      <span>
        <Avatar src={data.user.avatar_url}/> {data.user.login} 
        <span className="comment-meta"> commented {timeSince(new Date(data.created_at))} ago </span>
      </span>
    }
  >
    <p style={{whiteSpace: 'pre'}}>{data.body}</p>
  </Card>
)

export default Comment;
