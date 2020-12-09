import React from "react";

const ReviewForm = ({
  title,
  setTitle,
  comments,
  setComments,
  whenSubmit,
  // screen,
  // setScreen,
  alertMessage,
}) => {
  return (
    <>
      <div className="signup-container">
        <form onSubmit={whenSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Your review Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <p>{alertMessage}</p>
          <textarea
            type="text"
            placeholder="Your review Comments"
            value={comments}
            onChange={(event) => {
              setComments(event.target.value);
            }}
          />

          {/* <input
            type="file"
            accept=".png, .jpeg, .jpg, .svg"
              transformation: [{ width: 500, height: 500, crop: "limit" }],

            value={screen}
            onChange={(event) => {
              setScreen(event.target.files);
            }}
          /> */}
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
