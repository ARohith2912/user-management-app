import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map((user) => (
          <UserItem key={user.id} user={user} onDelete={onDelete} />
        ))
      ) : (
        <p>No users found. Please add a new user.</p>
      )}
    </div>
  );
};

export default UserList;