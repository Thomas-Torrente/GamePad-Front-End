import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "../components/SignUpForm";
import axios from "axios";
import Cookies from "js-cookie";
// import useSound from "use-sound";
// import why from "../assets/sound/why.mp3";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [token, setToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const history = useHistory();

  const whenSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email && username && password && checked === true) {
        // console.log("première étape vérifier");

        // console.log(
        //   "Les mot de passes sont bien identiques on passe a la suite"
        // );

        const response = await axios.post(
          "https://back-end-gamepad.herokuapp.com/user/signup",
          {
            email: email,
            username: username,
            password: password,
          }
        );

        Cookies.set("userToken", response.data.token, 7);
        console.log(response.data.token);
        // Cookies.set, créer le cookie, userToken est son nom et token est sa valeur

        setUser(response.data.token);
        history.push("/");
      }
      if (checked === false) {
        setAlertMessage("For your integrity please check this case !");
      } else {
        setAlertMessage("Please check that all fields are correctly filled");
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <>
      <div>
        <SignupForm
          whenSubmit={whenSubmit}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken}
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </>
  );
};

export default SignUp;
