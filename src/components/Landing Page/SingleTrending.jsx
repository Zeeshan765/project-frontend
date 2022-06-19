import React from "react";
import "./SingleTrending.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleTrending = ({ item }) => {
  console.log(item);
  return (
    <>
      <Card
        style={{ width: "25rem" }}
        className="card text-white bg-secondary"
        id="cardStyle"
      >
        <Card.Img className="imgStyle" variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <p>{item.description}</p>
          </Card.Text>
          <Button className="cardBtn" variant="primary">
            View More
          </Button>
        </Card.Body>
      </Card>
    </>
    // <>
    //   <div className="card-container">
    //     <div className="card-upper-part">
    //       <img src={item.image} alt="" />
    //     </div>
    //     <div className="card-lower-part">
    //       <h3>{item.name}</h3>
    //       <h4>{item.price}</h4>
    //       <p>
    //         {item.description}
    //       </p>
    //       <button className="view-btn">View More</button>
    //     </div>
    //   </div>
    // </>
  );
};
export default SingleTrending;
