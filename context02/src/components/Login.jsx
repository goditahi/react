import React from "react";

import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { useContext } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, userPassword });
  };

  return (
    <>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="text"
        placeholder="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
