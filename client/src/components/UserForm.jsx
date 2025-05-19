import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, editingUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, _id: editingUser?._id });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-primary" type="submit">
        {editingUser ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default UserForm;