import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  const {title, body } = post;

  return (
    <div>
      <h2>Post Users: {title}</h2>
      <p> Post body: {body}</p>
    </div>
  );
};

export default PostDetails;
