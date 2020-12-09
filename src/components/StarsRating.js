import React from "react";
import ReactStars from "react-rating-stars-component";
const StarsRatting = ({ data }) => {
  return (
    <>
      <ReactStars
        count={5}
        value={data.rating}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="red"
      />
    </>
  );
};

export default StarsRatting;
