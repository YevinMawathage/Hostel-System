import React, { useState } from 'react';
import users from'./Data/users.json';
import './css/Admin.css';


// Initial dummy data
const initialUsers = [
    { id: 1, username: "user1", email: "user1@example.com", role: "Student" },
    { id: 2, username: "user2", email: "user2@example.com", role: "Landlord" },
    { id: 3, username: "user3", email: "user3@example.com", role: "Warden" },
];

const AdminPage = () => {
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState({ username: "", email: "", role: "" });

    const addUser = () => {
        if (!newUser.username || !newUser.email || !newUser.role) return;
        setUsers([...users, { ...newUser, id: Date.now() }]); // Use timestamp as a faux ID
        setNewUser({ username: "", email: "", role: "" }); // Reset form
    };

    const updateUser = (id, updatedUser) => {
        setUsers(users.map(user => user.id === id ? updatedUser : user));
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    // Form change handler
    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>
            {/* Add User Form */}
            <div className="add-user-form">
                <div className="form-row"> {/* Container for input fields */}
                    <input type="text" name="username" placeholder="Username" value={newUser.username}
                           onChange={handleChange} className="input-dec"/>
                    <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange}
                           className="input-dec"/>
                    <input type="text" name="role" placeholder="Role" value={newUser.role} onChange={handleChange}
                           className="input-dec"/>
                </div>
                <button onClick={addUser}>Add User</button>
            </div>

            <h2>User Accounts</h2>
            {/* Users Table */}
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            {/* Placeholder for Update - Implement as needed */}
                            {/* <button onClick={() => updateUser(user.id, newUser)}>Update</button> */}
                            <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default AdminPage;
