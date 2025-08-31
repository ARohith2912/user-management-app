import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/users/UserForm';
import { updateUser } from '../api/userService';
import useUsers from '../hooks/useUsers';
import Spinner from '../components/common/Spinner';
import ErrorMessage from '../components/common/ErrorMessage';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, status, updateUserInState } = useUsers();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (status === 'success') {
      const userToEdit = users.find((u) => u.id === parseInt(id));
      if (userToEdit) {
        setUser(userToEdit);
      } else {
        navigate('/');
        alert('User not found.');
      }
    }
  }, [id, users, status, navigate]);

  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await updateUser(id, updatedUser);
      updateUserInState(response.data);
      alert('User updated successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to update user.');
    }
  };

  if (status === 'loading') return <Spinner />;
  if (!user && status === 'success') return <ErrorMessage message="User not found." />;
  if (status === 'error') return <ErrorMessage message="Failed to load users." />;

  return (
    <div className="container">
      <h2>Edit User</h2>
      {user && <UserForm onSubmit={handleUpdateUser} initialUser={user} />}
    </div>
  );
};

export default EditUserPage;