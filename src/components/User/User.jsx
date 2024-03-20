
import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id,name,email,phone}=user
    return (
        <div className="user-div">
            <h2>Name:{name}</h2>
            <code>Email: {email}</code>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;