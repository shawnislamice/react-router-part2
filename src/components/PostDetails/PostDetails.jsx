import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { postId } = useParams();
  console.log(parseInt(postId));
  return (
    <div>
      <p>Post: {id}</p>
      <h1>Title: {title}</h1>
      <code>Description: {body}</code>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
