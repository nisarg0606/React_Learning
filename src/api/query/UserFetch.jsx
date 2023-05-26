import React, { useEffect, useState } from "react";
import { deleteUserData, useFetchUserData } from "../../service/userService";
import { PacmanLoader } from "react-spinners";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { QueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserFetch = () => {
  const { data, isLoading, isError } = useFetchUserData();
  const [user, setUser] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);
  const queryClient = new QueryClient();
  // var navigate = useNavigate();
  useEffect(() => {
    console.log("Data: ", data);
    console.log("isLoading: ", isLoading);
    console.log("isError: ", isError);
    setUser(data);
  }, [data, isLoading, isError, deleteUser]);

  const handleDelete = (userId) => {
    deleteUserData(userId);
    toast.success("User deleted successfully");
    queryClient.invalidateQueries("users");
    // navigate("/usequery/users");
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <h1>Users</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <PacmanLoader color="#000000" />
        </div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link
                    to={`/usequery/updateuser/${user._id}`}
                    className="btn btn-info"
                  >
                    Update
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(user._id);
                      setDeleteUser(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
