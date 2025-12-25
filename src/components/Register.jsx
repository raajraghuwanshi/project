import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../features/AuthSliceReducer";

const Register = ({setToggle}) => {
  const { register, handleSubmit, reset } = useForm();
  let {users} = useSelector((state)=> state.auth)
  let dispatch = useDispatch()

  const formSubmit = (data) => {
      dispatch(setUsers(data))
      localStorage.setItem("registeredUsers",JSON.stringify([...users,data]))
      reset();
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">

     <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Sign up to get started
        </p>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="mt-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => setToggle((prev=> !prev))}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
