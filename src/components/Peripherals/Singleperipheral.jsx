import React from 'react';
import { useHistory } from 'react-router';
import './singleperipheral.css';
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Rating from '@material-ui/lab/Rating';

const Singleperipheral = (props) => {
  const { data } = props;
  const id = data._id;
  const history = useHistory();
  // const rating = data.rate;
// const[rating,setRating]=React.useState(0);
// setRating(data.rating);
const[reviewcount,setReviewcount] = React.useState("");

  //View Detail Click Function
  const handleView = () => {
    console.log(id);
    // window.location.href = '/productdetail/' + id;
    //history.push('/productdetail');
    history.push('/productdetail/' + id);
  };

  return (
    <>
    <Row s={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, id) => (
          <Col>
            <Card
              style={{ width: "22rem" }}
              className="card text-white"
              id="cardStyle"
              
            >
              {/* setRating(data.rating); */}
              <Card.Img
                className="imgStyle"
                variant="top"
                src={data.picture}
                alt=""
              />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  <h4>Rs. {data.price}</h4>
          {/* <Rating className='rating' name="read-only" value={rating} readOnly /><span className="ratingtxt">  ({data.numReviews})</span> */}

                  {/* <p>{data.description}</p> */}
                </Card.Text>
                <Card.Text>
                  <h5>{data.info1}</h5>
          {/* <Rating className='rating' name="read-only" value={rating} readOnly /><span className="ratingtxt">  ({data.numReviews})</span> */}

                  {/* <p>{data.description}</p> */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => {
                      handleView();
                      // setRating(data.rating);
                    }} className="card-btn">
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <div className='product-box1'>
        <div className='upper-box1'>
          <img src={data.picture} alt='' />
        </div>
        <div className='lower-box1'>
          <h3>{data.name}</h3>
          <h4>{data.price} Rs/-</h4>
          <h4>  Brand:{data.company}</h4>

          <button className='btn-check' onClick={handleView}>
            View Detail
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Singleperipheral;
