import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddUserData } from "../../service/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, isError, isIdle, isLoading, mutate } = useAddUserData();
  const onSubmit = async (data) => {
    var user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
    };
    mutate(user);
    if (isError) {
      toast.error("Error adding user");
    } else {
      toast.success("User added successfully");
    }
  };

  useEffect(() => {
    console.log("Data: ", data);
    console.log("isError: ", isError);
    console.log("isIdle: ", isIdle);
    console.log("isLoading: ", isLoading);
  }, [data, isError, isIdle, isLoading]);

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
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            {...register("age", { required: true })}
          />
          {errors.age && <span>This field is required</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
