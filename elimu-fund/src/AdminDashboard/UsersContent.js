import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import axios from 'axios';

const UsersContent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define your API endpoint for fetching user data
    const apiUrl = 'http://localhost:5000/fetch'; // Use the correct URL for your API

    // Fetch user data from the API when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the fetched user data to the state
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleStatusChange = (userId, newStatus) => {
    // Update user status in the frontend and send the update to the backend
    // ...

  };

  const handleDelete = (userId) => {
    // Confirm user deletion with a dialog
    const confirmDelete = window.confirm(`Are you sure you want to delete user with ID: ${userId}?`);
    if (confirmDelete) {
      // Define your API endpoint for deleting a user
      const deleteApiUrl = `http://localhost:5000/delete/${userId}`; // Use the correct URL for your delete endpoint

      // Send a request to delete the user in the backend
      axios
        .delete(deleteApiUrl)
        .then((response) => {
          if (response.data.message === 'User deleted successfully') {
            // Remove the user from the frontend
            setUsers((prevUsers) => prevUsers.filter((user) => user.student_id !== userId)); // Updated to use student_id
          } else {
            console.error('Error deleting user:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <UserTable
        users={users}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete} // Pass the handleDelete function
      />
    </div>
  );
};

export default UsersContent;
