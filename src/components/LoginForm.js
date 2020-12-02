import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  alertMessage,
  setAlertMessage,
  whenSubmit,
}) => {
  return (
    <>
      <div className="signup-container">
        <form onSubmit={whenSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <p>{alertMessage}</p>
          <button type="submit"> Login</button>
          <h3> OR</h3>
          <Link to="/signup">You don't have account ? Create here</Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
