import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const postStyle = {
    border: "2px solid red",
    padding: "12px",
    borderRadius: "10px",
  };

  return (
    <div style={postStyle}>
      <h2>{title}</h2>
      <p>
        <small>{body}</small>
      </p>

      <Link to={`/post/${id}`}>Posts Details</Link>
    </div>
  );
};

export default Post;
