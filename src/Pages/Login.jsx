import React, { useRef } from "react";
import { useEvents } from "../Data";

function Login({ setlogin }) {
  const { setStudent } = useEvents();
  let stdRef = useRef();

  function handleSubmit() {
    setlogin(true);
    setStudent(stdRef.current.checked ? true : false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#640D5F] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden p-8"
      >
        <div className="mb-8 text-center">
          <p className="text-2xl font-bold text-[#D91656]">
            Login to your account
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              value="Students"
              ref={stdRef}
              name="position"
              defaultChecked
              className="text-[#D91656] focus:ring-[#EB5B00]"
            />

            <label className="ml-2 text-[#640D5F]">Student</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="Admin"
              name="position"
              className="text-[#D91656] focus:ring-[#EB5B00]"
            />

            <label className="ml-2 text-[#640D5F]">Admin</label>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#640D5F] mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            required
            className="w-full px-4 py-2 border border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#640D5F] mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="Password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"
          />
        </div>
        <input
          type="submit"
          placeholder="Login"
          className="w-full bg-[#D91656] hover:bg-[#EB5B00] text-white font-bold py-2 px-4 rounded-md transition duration-200 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Login;
