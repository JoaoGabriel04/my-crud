import React, { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import * as userService from './services/userService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const loadUsers = async () => {
    const res = await userService.getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSave = async (user) => {
    if (user._id) {
      await userService.updateUser(user);
    } else {
      await userService.createUser(user);
    }
    setEditingUser(null);
    loadUsers();
  };

  const handleDelete = async (id) => {
    await userService.deleteUser(id);
    loadUsers();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">CRUD de Usuários</h2>
      <UserForm onSave={handleSave} editingUser={editingUser} />
      <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
    </div>
  );
};

export default App;