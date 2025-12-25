import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logInUser } from "../features/AuthSliceReducer";
import { useNavigate } from "react-router";

const Login = ({ setToggle }) => {
  const { register, handleSubmit, reset } = useForm();
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const formSubmit = (data) => {
    dispatch(logInUser(data))
    navigate("/home")
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="mt-6 space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
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
            Login
          </button>
        </form>
            <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
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

export default Login;
