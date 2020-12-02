import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

const SignUpForm = ({
  whenSubmit,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  alertMessage,
  setAlertMessage,
  checked,
  setChecked,
}) => {
  return (
    <>
      <div className="signup-container">
        <form onSubmit={whenSubmit} className="signup-form">
          <h2 className="title-center">Signup</h2>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Username"
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
          <p className="agree">
            I agree to give my life to protect and keep the noble cause of video
            games
          </p>
          <Checkbox
            checked={checked}
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          ></Checkbox>

          <p>{alertMessage}</p>
          <button type="submit"> SignUp</button>
          <h3>OR</h3>
          <Link to="/login">Already have an account ? Login now</Link>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
