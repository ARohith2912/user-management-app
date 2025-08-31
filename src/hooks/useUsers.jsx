import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api/userService';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setStatus('loading');
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
      setStatus('success');
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      setStatus('error');
    }
  };

  const removeUser = async (id) => {
    const originalUsers = users;
    setUsers(users.filter((user) => user.id !== id)); // Optimistic UI update

    try {
      await deleteUser(id);
      alert('User deleted successfully!');
    } catch (err) {
      setUsers(originalUsers); // Revert on failure
      alert('Failed to delete user.');
    }
  };

  const addUserInState = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: Date.now() }]);
  };

  const updateUserInState = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, status, error, removeUser, addUserInState, updateUserInState };
};

export default useUsers;