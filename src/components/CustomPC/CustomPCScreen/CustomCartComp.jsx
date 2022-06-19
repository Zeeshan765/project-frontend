import React from "react";
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
import "./CustomCartComp.css";

export default function CustomCartComp({ item }) {
  return (
    <>
    <Col s={1} md={1} className="g-8">
        {Array.from({ length: 1 }).map((_, id) => (
          <Row>
            <Card
              style={{ width: "15rem" }}
              className="card text-white"
              id="cardStyleBuild"
            >
              <Card.Img
                className="imgStyleBuild"
                variant="top"
                src={item.picture}
                alt=""
              />
              <Card.Body>
                <Card.Title style={{fontSize: "19px"}}>{item.name}</Card.Title>
                <Card.Text>
                  <h4 style={{fontSize: "17px"}}> Rs. {item.price}</h4>
                  <p style={{fontSize: "14px"}}>{item.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Col>

      {/* <div className="card-container">
        <div className="card-upper-part">
          <img
            style={{
              width: "100px",
              height: "50px",
              borderRadius: "50%",
              borderColor: "purple",
            }}
            src={item.picture}
            alt=""
          />
        </div>
        <div className="card-lower-part">
          <h5>{item.name}</h5>
          <h5>{item.price}Pkr</h5>
        </div>
      </div> */}
    </>
  ); 
}
