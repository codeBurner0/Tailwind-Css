import React from "react";

function Login() {
  return (
    <div className=" relative w-1/3 h-96 my-36 bg-black rounded-xl shadow-2xl shadow-black m-[35%]">
      <h1 className=" text-white text-center font-bold text-3xl relative top-10 font-mono">
        Login
      </h1>
      <h1 className=" text-[aqua] relative top-12 left-14 text">UserName</h1>
      <input
        type="text"
        className=" border-b-white absolute bg-black border-b-4 top-28 left-14 w-[70%]"
      />
      <input
        type="text"
        className=" border-b border-b-white bg-black border-b-4 absolute top-40 left-14 w-[70%]"
      />
      <button className=" absolute bottom-5 ml-9  border border-blue-950 border-4 bg-blue-400 p-2 px-4 text-xl font-bold rounded-xl">
        Submit
      </button>
    </div>
  );
}

export default Login;
