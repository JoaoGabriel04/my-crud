import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h4>Usuários</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(u)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(u._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;