import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-40 right-0 left-0 bg-opacity-80">
        <h2 className="text-white font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
      { !isSignInForm &&
       <input
          className="border px-2 border-white py-3 w-full rounded-md opacity-50 bg-gray-900  mt-4"
          type="text"
          placeholder="Enter your Name"
        />}
        <input
          className="border px-2 border-white py-3 w-full my-4 rounded-md opacity-50 bg-gray-900"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="border px-2 border-white py-3 w-full rounded-md opacity-50 bg-gray-900"
          type="password"
          placeholder="Password"
        />
        <button className="mt-3 py-2 bg-red-600 w-full bg-opacity-100 rounded-md text-white font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h4 className="text-white text-lg text-center py-4">OR</h4>
        {isSignInForm && <button className="mt-3 py-2 bg-gray-800 w-full bg-opacity-60 rounded-md text-white font-medium">
          Use a sign-in code
        </button>}
        <h3 className="text-white text-center py-3 hover:underline">
          <Link to="/forgot-password">Forgot password?</Link>
        </h3>
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="text-white text-sm pl-2">
            Remember Me
          </label>
        </div>
        <h4 className="text-white my-3">
        {isSignInForm ? ` New to Netflix? ` : `Already a User? `}
          <span
            className="hover:underline font-semibold cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in here"}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default Login;
