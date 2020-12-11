import React, { useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import { useParams } from "react-router-dom";

const CreateReview = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [screen, setScreen] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const { slug } = useParams();

  const whenSubmit = async (event) => {
    event.preventDefault();

    try {
      if (title && description) {
        console.log("Les Champs sont remplies c ok");
      } else {
        setAlertMessage(
          "Merci de remplir correctement le titre et votre commentaire"
        );
      }

      const response = await axios.post(
        `https://back-end-gamepad.herokuapp.com/games/post`,
        // "http://localhost:3100/review/comment",
        { title: title, description: description, slug: slug }
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
          description={description}
          setDescription={setDescription}
          // screen={screen}
          // setScreen={setScreen}
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
          whenSubmit={whenSubmit}
          slug={slug}
        />
      </div>
    </>
  );
};

export default CreateReview;
