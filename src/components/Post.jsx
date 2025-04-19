import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`)
  }

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
      <Link to={`/post/${id}`}>
      <button>Show Details</button>
      </Link>
      <button onClick={handleShowDetails}>Click to see Details</button>
    </div>
  );
};

export default Post;
