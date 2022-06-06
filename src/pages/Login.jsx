import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [logins, setLogin] = useState("");
  
  const {login}=useContext(AuthContext)
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...logins, [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (logins.email && logins.password) {
      login(logins.email, logins.password);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" placeholder="Enter Email"  onChange={hanldeChange}/>
      <input data-cy="login-password"  placeholder="Enter Password" onChange={hanldeChange}/>
      <button data-cy="login-submit" placeholder="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;


// placeholder="Enter email
// placeholder="Enter Password"