import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router";
import budget1 from "../../Assets/budgetpc1.jpg";
import budget2 from "../../Assets/budgetpc2.png";
import budget3 from "../../Assets/budgetpc3.png";
import "./BudgetPage.css";
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

const BudgetPage = () => {
  //const history = useHistory();

  /* Click on Budget Box It Navigate to budget page */
  // const handlelowbudget = () =>{
  // history.push ('/budget/lowbudget');

  //    }
  return (
    <div className="budget-container">
      <div className="budget-title">
        <h1 className="TextStyle">Select The Budget Range</h1>
      </div>
      <div className="budget-wrapper">
        <>
          <Link to="/budget/lowbudget" style={{textDecoration: "none"}}>
            <Card
              style={{ width: "25rem" }}
              className="card text-white bg-secondary"
              id="CustomCard"
            >
              <Card.Img className="imgStyle" variant="top" src={budget1} />
              <Card.Body>
                <Card.Title className="cardTitle">Low Budget</Card.Title>
                <Card.Text>
                  <h3 className="cardDesc">Budget Range</h3>
                  <h4 className="cardDesc">40,000 pkr ------ 55,000 pkr</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link to="/budget/midbudget" style={{textDecoration: "none"}}>
          <Card
            id="CustomCard"
            style={{ width: "25rem" }}
            className="card text-white bg-secondary"
          >
            <Card.Img className="imgStyle" variant="top" src={budget2} />
            <Card.Body>
              
              <Card.Title className="cardTitle">Mid Range Budget</Card.Title>
              <Card.Text>
                <h3 className="cardDesc">BudgetRange</h3>
                <h4 className="cardDesc">60,000 pkr ------ 80,000 pkr</h4>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>

          <Link to="/budget/highbudget" style={{textDecoration: "none"}}>
          <Card
            id="CustomCard"
            style={{ width: "25rem" }}
            className="card text-white bg-secondary"
          >
            <Card.Img className="imgStyle" variant="top" src={budget3} />
            <Card.Body>
              
              <Card.Title className="cardTitle">High End Budget</Card.Title>
              <Card.Text>
                <h3 className="cardDesc">BudgetRange</h3>
                <h4 className="cardDesc">90,000+  pkr</h4>
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>

        </>
        {/* <div className="budget-box"  >
              <Link to="/budget/lowbudget">
                  <div className="first-half">
                      <img src={budget1} alt="" />
                  </div>
                  <div className="second-half">
                      <h2>Low Budget</h2>
                      <h3>BudgetRange</h3>
                      <h4>40,000 pkr ------ 55,000 pkr</h4>
                  </div>
                  </Link>

              </div>


              <div className="budget-box">
              <Link to="/budget/midbudget">
           
                  <div className="first-half">
                      <img src={budget2} alt="" />
                  </div>
                  <div className="second-half">
                      <h2>Mid Range Budget</h2>
                      <h3>BudgetRange</h3>
                      <h4>60,000 pkr ------ 80,000 pkr</h4>
                  </div>
                  </Link>

              </div>




              <div className="budget-box">
              <Link to="/budget/highbudget">
                  <div className="first-half">
                      <img src={budget3} alt="" />
                  </div>
                  <div className="second-half">
                      <h2>High End Budget</h2>
                      <h3>BudgetRange</h3>
                      <h4>90,000+  pkr </h4>
                  </div>
                  </Link>

              </div> */}
      </div>
    </div>
  );
};

export default BudgetPage;
