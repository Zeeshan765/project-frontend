import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./ComponentRating.css"
const ComponentRating = ({ review }) => {
  return (
    <>
      <div className="rating" >
        <h4>{review.user}</h4>
        <Rating name="read-only" value={review.rating} readOnly />
        <h5>{review.comment}</h5>
      </div>
    </>
  );
};

export default ComponentRating;
