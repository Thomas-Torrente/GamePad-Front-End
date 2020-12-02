import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = ({ setToken, setUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const whenSubmit = async (event) => {
    event.preventDefault();
    try {
      if (username && password) {
        //  console.log("si tous les champs sont remplie  c ok");
      } else {
        setAlertMessage("Merci de remplirs tous les champs correctements");
      }

      const response = await axios.post(
        "https://back-end-gamepad.herokuapp.com/user/login",

        { username: username, password: password }
      );
      if (setUser(response.data.token)) {
        history.push("/");
      } else {
        setAlertMessage("error");
      }
    } catch (error) {
      setAlertMessage(error.response.data.error);
    }
  };

  return (
    <>
      <div>
        <LoginForm
          whenSubmit={whenSubmit}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
        />
      </div>
    </>
  );
};

export default Login;
