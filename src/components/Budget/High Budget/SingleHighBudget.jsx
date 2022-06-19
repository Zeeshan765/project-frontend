import React from 'react';
import { useHistory } from 'react-router';

import './SingleHighBudget.css';
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

const SingleHighBudget = ({ product }) => {
  console.log(product.category);

  const id = product._id;
  const history = useHistory();

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
              <Card.Img
                className="imgStyle"
                variant="top"
                src={product.picture}
                alt=""
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <h4> Rs. {product.price}</h4>
                  <p style={{fontSize: "15px"}}>{product.description}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleView} className="card-btn">
                  View Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <div className='product-box'>
        <div className='upper-box'>
          <img src={product.picture} alt='' />
        </div>
        <div className='lower-box'>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <button className='btn-1'onClick={handleView}>View Detail</button>
        </div>
      </div> */}
    </>
  );
};

export default SingleHighBudget;
