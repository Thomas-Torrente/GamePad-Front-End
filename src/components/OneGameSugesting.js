import React from "react";

const OneGameSugesting = ({ data, setData }) => {
  return (
    <>
      <div>
        <h3>Suggested Games</h3>
        {data.results.map((suggested, index) => {
          return <img src={suggested.background_image} alt="" />;
        })}
      </div>
    </>
  );
};

export default OneGameSugesting;
