import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_header">
          <h2>Raunak Raj</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post_body">
        <p>Message goes here</p>
      </div>

    </div>
  )
}

export default Post
