import React from "react";

const ReviewForm = ({
  title,
  setTitle,
  description,
  setDescription,
  whenSubmit,
  // screen,
  // setScreen,
  alertMessage,
  slug,
}) => {
  return (
    <>
      <div className="signup-container">
        <form onSubmit={whenSubmit} className="signup-form">
          <input type="text" value={slug} disabled="disabled" />
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
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <button type="submit">Submit Review</button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
