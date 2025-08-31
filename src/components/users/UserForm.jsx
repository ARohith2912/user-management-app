import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialUser = {} }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    ...initialUser,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={user.phone} onChange={handleChange} required />
      </div>
      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;