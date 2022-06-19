import React from "react";
import { useDispatch } from "react-redux";
import { addHdd } from "../../../Redux/cartRedux";
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
import "./customCards.css";

function HddComp({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <Row s={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, id) => (
          <Col>
            <Card
              style={{ width: "22rem" }}
              className="card text-white"
              id="Customcards"
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
                  <h4>{product.price} pkr</h4>
                  <p>{product.description}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  className="card-btn"
                  onClick={() => {
                    dispatch(addHdd(product));
                  }}
                >
                  Add
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
    // <>
    //   <div className="card-container">
    //     <div className="card-upper-part">
    //       <img src={product.picture} alt="" />
    //     </div>
    //     <div className="card-lower-part">
    //       <h3>{product.name}</h3>
    //       <p>{product.company}</p>
    //       <h4>{product.price}</h4>
     
    //       <button
    //         className="view-btn"
    //         onClick={() => {
    //           dispatch(addHdd(product));
    //         }}
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
}

export default HddComp;
