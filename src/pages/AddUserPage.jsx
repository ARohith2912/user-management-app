import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/users/UserForm';
import { createUser } from '../api/userService';
import useUsers from '../hooks/useUsers';

const AddUserPage = () => {
  const navigate = useNavigate();
  const { addUserInState } = useUsers();

  const handleCreateUser = async (newUser) => {
    try {
      const createdUser = await createUser(newUser);
      addUserInState(createdUser);
      alert('User created successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to create user.');
    }
  };

  return (
    <div className="container">
      <h2>Add New User</h2>
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default AddUserPage;