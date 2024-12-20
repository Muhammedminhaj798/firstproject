import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [input,setInput] = useState({
        userName : '',
        email : '',
        password : ''
  })
  console.log("input",  input);
  
  const handleFocus = ()=>{
    setFocus(true)
  }
  const [focus, setFocus] = useState({
    errName : false,
    errEmail : false,
    errPassword : false
  })

  const navigate = useNavigate();

  const handleData =async (e) => {
    e.preventDefault()
    // navigate("/")

  
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`Name: ${name}, Value: ${value}`);
    setInput({ ...input, [name]: value });
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-yellow-700 p-14 rounded-lg shadow-lg">
        <form onSubmit={handleData} className="flex flex-col gap-4">
          <input
            type="text"
            // pattern="^[A-Za-z0-9].{2,16}"
            placeholder="User name"
            onChange={handleChange}
            value={input.userName}
            focus={focus.errName.toString()}
            onBlur={()=>setFocus({...focus, errName:true})}
            required
            name="userName"
            className="p-2 rounded border border-gray-300"
          />
          <br />
          <input
            type="email"
            onChange={handleChange}
            value={input.email}
            placeholder="E-mail"
            required
            name="email"
            className="p-2 rounded border border-gray-300"
          />
          <br />
          <input
            type="password"
            onChange={handleChange}
            value={input.password}
            placeholder="Enter Your Password"
            required
            name="password"
            className="p-2 rounded border border-gray-300"
          />
          <br />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
