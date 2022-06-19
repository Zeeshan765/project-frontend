
import React from 'react';
import Rating from '@material-ui/lab/Rating';


const ProductRating = ({review}) => {
  
  
  return (
   <>
   <div>
   <h4>{review.user}</h4>
   <Rating name="read-only" value={review.rating} readOnly />
   <h5>{review.comment}</h5>
   </div>
   </>
  )
}

export default ProductRating