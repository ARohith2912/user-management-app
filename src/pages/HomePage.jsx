import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/users/UserList';
import Spinner from '../components/common/Spinner';
import ErrorMessage from '../components/common/ErrorMessage';
import useUsers from '../hooks/useUsers';

const HomePage = () => {
  const { users, status, error, removeUser } = useUsers();

  return (
    <div className="container">
      <div className="header">
        <h1>User List</h1>
        <Link to="/add-user" className="button add-button">
          Add New User
        </Link>
      </div>

      {status === 'loading' && <Spinner />}
      {status === 'error' && <ErrorMessage message={error} />}
      {status === 'success' && <UserList users={users} onDelete={removeUser} />}
    </div>
  );
};

export default HomePage;