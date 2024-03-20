import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="user-div">
      <h2>Title: {title}</h2>
      <p>Description: {body}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleShowDetails}>Click To See Details</button>
    </div>
  );
};

export default Post;
