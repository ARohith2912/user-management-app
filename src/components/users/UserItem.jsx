import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      onDelete(user.id);
    }
  };

  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <div className="user-actions">
        <Link to={`/edit-user/${user.id}`} className="button edit">
          Edit
        </Link>
        <button onClick={handleDelete} className="button delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;