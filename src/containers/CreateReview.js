import React, { useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

const CreateReview = () => {
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  // const [screen, setScreen] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const whenSubmit = async (event) => {
    event.preventDefault();

    try {
      if (title && comments) {
        console.log("Les Champs sont remplies c ok");
      } else {
        setAlertMessage(
          "Merci de remplir correctement le titre et votre commentaire"
        );
      }

      const response = await axios.post(
        // "https://back-end-gamepad.herokuapp.com/games/${id}/post",
        "http://localhost:3100/review/comment",
        { title: title, comments: comments }
      );
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <>
      <div>
        <ReviewForm
          title={title}
          setTitle={setTitle}
          comments={comments}
          setComments={setComments}
          // screen={screen}
          // setScreen={setScreen}
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
          whenSubmit={whenSubmit}
        />
      </div>
    </>
  );
};

export default CreateReview;
