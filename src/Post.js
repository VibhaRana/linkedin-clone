import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption'

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className = 'post__buttons'>
       <InputOption 
       Icon = {ThumbUpAltIcon}
       title = 'Like'
       color = 'gray'
       />
       <InputOption 
       Icon = {ChatOutlinedIcon}
       title = 'Comment'
       color = 'gray'
       />
       <InputOption 
       Icon = {ShareOutlinedIcon}
       title = 'Share'
       color = 'gray'
       />
       <InputOption 
       Icon = {SendOutlinedIcon}
       title = 'Send'
       color = 'gray'
       />

      </div>
    </div>
  );
}

export default Post;
