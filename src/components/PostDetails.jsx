import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  const {id, title, body } = post;

  const {postId} = useParams();
  console.log(postId) 

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div>
        <h3>{id}</h3>
      <h2>Post Users: {title}</h2>
      <p> Post body: {body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
