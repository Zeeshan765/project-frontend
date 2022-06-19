import React from "react";
import "./singleComponent.css";
import { useHistory } from "react-router";
// import Button from "react-bootstrap/Button";
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
// import Col from "react-bootstrap/Card";
// import Row from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";

const SingleComponent = (props) => {
  console.log(props);
  const { data } = props;
  const id = data._id;
  const history = useHistory();

  //View Detail Click Function
  const handleView = () => {
    console.log(id);
    // window.location.href = '/productdetail/' + id;
    //history.push('/productdetail');
    history.push("/componentdetail/" + id);
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
                src={data.picture}
                alt=""
              />
              <Card.Body>
                <Card.Title style={{fontSize: "19px"}}>{data.name}</Card.Title>
                <Card.Text>
                  <h4 style={{fontSize: "17px"}}> Rs. {data.price}</h4>
                  <p style={{fontSize: "14px"}}>{data.description}</p>
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

      {/* <Card>  
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card> */}
    </>
    // <>
    //   <div className='product-box1'>
    //     <div className='upper-box1'>
    //       <img src={data.picture} alt='' />
    //     </div>
    //     <div className='lower-box1'>
    //       <h3>{data.name}</h3>
    //       <h4>{data.price}</h4>
    //       <p>{data.description}</p>
    //       <button className='btn-check' onClick={handleView}>
    //         View Detail
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
};

export default SingleComponent;
