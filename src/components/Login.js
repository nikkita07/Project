import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="backgroung-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-40 right-0 left-0 bg-opacity-80">
        <h2 className="text-white font-bold text-3xl">Sign In</h2>
        <input
          className=" border px-2 border-white py-3 w-full my-4 rounded-md opacity-50 bg-gray-900"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className=" border px-2 border-white py-3 w-full rounded-md opacity-50 bg-gray-900 "
          type="password"
          placeholder="Password"
        />
        <button
          className=" mt-3 py-2 bg-red-600 w-full bg-opacity-100 rounded-md
         text-white font-medium "
        >
          Sign In
        </button>
        <h4 className="text-white text-lg text-center py-4">OR</h4>
        <button
          className=" mt-3 py-2 bg-gray-800 w-full bg-opacity-60 rounded-md
         text-white font-medium "
        >
          Use a sign-in code
        </button>
        <h3 className="text-white text-center py-3 hover:underline">
          <a href="#">Forgot password?</a>
        </h3>
        <input type="checkbox"></input>
        <label className="text-white text-sm "> Remember Me</label>
        <h4 className="text-white my-3 ">New to netflix? <span><a href="/" className="hover:underline font-semibold">Sign up now</a></span></h4> 
      </form>
    </div>
  );
};
export default Login;
