import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon
import PropTypes from 'prop-types';

const UserTable = ({ users, onDelete }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Reg.No</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
          <th>Institution</th>
          <th>Actions</th> {/* Add the Actions column header */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.student_id}>
            <td>{user.student_id}</td>
            <td>{user.name}</td>
            <td>{user.registration}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.password}</td>
            <td>{user.institution}</td>
            <td>
              <button onClick={() => onDelete(user.student_id)}>
                <FaTrash color="red" /> {/* Delete icon */}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired, // Add onDelete prop
};

export default UserTable;
