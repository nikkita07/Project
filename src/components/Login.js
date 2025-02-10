import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate.js";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrMsg(null); // Clear error when toggling forms
  };

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const msg = checkValidData(email, password);
    setErrMsg(msg);
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <Header />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
        alt="background-img"
      />
      <div className="flex justify-center items-center min-h-screen relative">
        <form
          onSubmit={handleButtonClick}
          className="w-full max-w-md px-6 py-8 bg-black bg-opacity-80 rounded-md shadow-lg"
        >
          <h2 className="text-white font-bold text-3xl mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              className="border px-2 border-white py-3 w-full rounded-md bg-gray-900 text-white mb-4"
              type="text"
              placeholder="Enter your Name"
            />
          )}
          <input
            ref={emailRef}
            className="border px-2 border-white py-3 w-full rounded-md bg-gray-900 text-white mb-4"
            type="text"
            placeholder="Email or mobile number"
          />
          <input
            ref={passwordRef}
            className="border px-2 border-white py-3 w-full rounded-md bg-gray-900 text-white mb-4"
            type="password"
            placeholder="Password"
          />
            {errMsg && <p className="text-red-600 font-bold text-center">{errMsg}</p>}
          <button
            className="mt-3 py-2 bg-red-600 w-full rounded-md text-white font-medium hover:bg-red-700 cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <h4 className="text-white text-lg text-center py-4">OR</h4>

          {isSignInForm && (
            <button className="mt-3 py-2 bg-gray-800 w-full rounded-md text-white font-medium hover:bg-gray-700 cursor-pointer">
              Use a sign-in code
            </button>
          )}

          <h3 className="text-white text-center py-3 hover:underline">
            <Link to="/forgot-password">Forgot password?</Link>
          </h3>

          {/* <div className="flex items-center text-white">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-sm pl-2">
              Remember Me
            </label>
          </div> */}

        

          <h4 className="text-white  text-center">
            {isSignInForm ? "New to Netflix? " : "Already a User? "}
            <span
              className="hover:underline font-semibold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now" : "Sign in here"}
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
