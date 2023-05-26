import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const id = useParams().id;
  var navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const response = await axios.get(BASE_URL + "/users/" + id);

      return {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        age: response.data.age,
      };
    },
  });

  const updateUser = async (data) => {
    try {
      const response = await axios.put(BASE_URL + "/users/" + id, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    navigate("/usequery/users");
  };
  return (
    <div>
      <h1> Update User</h1>
      <form onSubmit={handleSubmit(updateUser)}>
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
        <br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};
