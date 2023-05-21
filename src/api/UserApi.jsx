import axios from "axios";
import React, { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const UserApi = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        BASE_URL + "/users"
      );
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (userId) => {
    try {
      // Get the user data to be updated
      const userToUpdate = users.find((user) => user._id === userId);

      // Open the update form and populate with user data
      setIsFormOpen(true);
      setNewUser(userToUpdate);
      const resp = axios.put(
        BASE_URL + "/users/" + userId,
        userToUpdate
      );
      resp.then((response) => {
        console.log(response);
        getData();
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = (userId) => {
    const resp = axios.delete(
      BASE_URL + "/users/" + userId
    );
    resp.then((response) => {
      console.log(response);
      getData();
    });
    console.log("Delete user with ID:", userId);
  };

  const handleFormOpen = () => {
    setIsFormOpen(true);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
    });
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
    });
  };

  const handleInputChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let resp = null;
    if (newUser._id) {
      // Update user
      resp = await axios.put(
        BASE_URL + "/users/" + newUser._id,
        newUser
      );
    } else {
      // Add user
      resp = await axios.post(
        BASE_URL + "/users",
        newUser
      );
    }
    if (resp.status !== 200) {
      console.error("Error saving user:", resp);
    }
    getData();
    handleFormClose();
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdate(user._id)}
                  >
                    Update
                  </button>
                    &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}

      {!isFormOpen ? (
        <button className="btn btn-success" onClick={handleFormOpen}>
          Add User
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>{newUser._id ? "Update User" : "Add User"}</h2>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newUser.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={newUser.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={newUser.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {newUser._id ? "Update" : "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleFormClose}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};
