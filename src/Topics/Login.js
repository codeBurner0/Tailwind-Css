import React from "react";

function Login() {
  return (
    <div className=" border border-4 border-gray-600 border-dotted relative w-1/3 h-96 my-36 bg-black rounded-xl shadow-2xl shadow-black m-[35%]">
      <h1 className=" text-white text-center">Login</h1>
      <button className=" absolute bottom-5 left-[39%] border border-blue-950 border-4 bg-blue-400 p-2 px-4 text-xl font-bold rounded-xl">
        Submit
      </button>
    </div>
  );
}

export default Login;
