import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <div className="post__body">
        <h1>{props.posts.id}</h1>
        <h2>{props.posts.title}</h2>
        <p>{props.posts.body}</p>
      </div>
    </div>
  );
}

export default Post;
