import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { handleHigh, handleLow, handleMed } from "../../Redux/requirementRedux";
import low from "../../Assets/low.jpg";
import med from "../../Assets/med.jpg";
import high from "../../Assets/budgetpc3.png";
import "./ReqComp.css";
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

const ReqComp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  function getLowPC() {
    history.push("/budget/lowbudget");
  }
  function getMedPC() {
    history.push("/budget/midbudget");
  }
  function getHighPC() {
    history.push("/budget/highbudget");
  }
  return (
    <>
      <div className="pc-container">
        <Card
          style={{ width: "22rem" }}
          className="card text-white"
          id="ReqcardStyle"
        >
          <Card.Img src={low} className="ReqimgStyle" variant="top" alt="" />
          <Card.Body>
            <Card.Title>Low PC</Card.Title>
            <Card.Text>
              <h4>Price Range: Rs. 30000-45000</h4>
              <p>From office use to Low end gaming</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => getLowPC()} className="Reqcard-btnView">
              View PC's
            </Button>
            <Button
              onClick={() => dispatch(handleLow())}
              className="Reqcard-btnCheck"
            >
              Check
            </Button>
          </Card.Footer>
        </Card>
        {/* <div className="product-box">
          <div
            // onClick={() => sugg(cat)}
            className="upper-box"
          >
            <img src={low} alt="" />
          </div>
          <div className="lower-box">
            <h3>Low PC</h3>
            <h4>Price Range: 30000-45000</h4>
            <p>From office use to Low end gaming</p>
            <button onClick={() => dispatch(handleLow())} className="btn-1">
              Check
            </button>
            <button onClick={() => getLowPC()} className="btn-1">
              View PC
            </button>
          </div>
        </div> */}
        <Card
          style={{ width: "22rem" }}
          className="card text-white"
          id="ReqcardStyle"
        >
          <Card.Img src={med} className="ReqimgStyle" variant="top" alt="" />
          <Card.Body>
            <Card.Title>Medium PC</Card.Title>
            <Card.Text>
              <h4>Price Range: Rs. 50000-80000</h4>
              <p>For Intermediate gaming and software developement</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => getMedPC()} className="Reqcard-btnView">
              View PC's
            </Button>
            <Button
              onClick={() => dispatch(handleMed())}
              className="Reqcard-btnCheck"
            >
              Check
            </Button>
          </Card.Footer>
        </Card>
        {/* <div className="product-box">
          <div className="upper-box">
            <img src={med} alt="" />
          </div>
          <div className="lower-box">
            <h3>Medium PC</h3>
            <h4>Price Range: 50000-80000</h4>
            <p>For Intermediate gaming and software developement</p>
            <button onClick={() => dispatch(handleMed())} className="btn-1">
              Check
            </button>
            <button onClick={() => getMedPC()} className="btn-1">
              View PC
            </button>
          </div>
        </div> */}
        <Card
          style={{ width: "22rem" }}
          className="card text-white"
          id="ReqcardStyle"
        >
          <Card.Img src={high} className="ReqimgStyle" variant="top" alt="" />
          <Card.Body>
            <Card.Title>High End PC</Card.Title>
            <Card.Text>
              <h4>Price Range: Rs. 90000-120000+</h4>
              <p>For High End Gaming, Streaming and 3d Modelling</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => getHighPC()} className="Reqcard-btnView">
              View PC's
            </Button>
            <Button
              onClick={() => dispatch(handleHigh())}
              className="Reqcard-btnCheck"
            >
              Check
            </Button>
          </Card.Footer>
        </Card>
        {/* <div>
          <div className="product-box">
            <div className="upper-box">
              <img src={high} alt="" />
            </div>
            <div className="lower-box">
              <h3>High End PC</h3>
              <h4>Price Range: 90000-120000+</h4>
              <p>For High End Gaming, Streaming and 3d Modelling</p>
              <button onClick={() => dispatch(handleHigh())} className="btn-1">
                Check
              </button>
              <button onClick={() => getHighPC()} className="btn-1">
                View PC
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ReqComp;
