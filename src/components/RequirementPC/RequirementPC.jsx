import React from "react";
import "./RequirementPC.css";
import PUBG from "../../Assets/PUBG.png";
import GTAV from "../../Assets/GTAV.jpg";
import Apex from "../../Assets/Apex.jpg";

import ReqComp from "./ReqComp";

import {
  getpubgreso,
  getapexfps,
  getapexreso,
  getgtafps,
  getgtareso,
  getpubgfps,
} from "../../Redux/requirementRedux";
import { useSelector } from "react-redux";
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

const RequirementPC = () => {
  const pubgfps = useSelector(getpubgfps);
  const pubgreso = useSelector(getpubgreso);
  const gtafps = useSelector(getgtafps);
  const gtareso = useSelector(getgtareso);
  const apexfps = useSelector(getapexfps);
  const apexreso = useSelector(getapexreso);

  return (
    <>
    <div className="bar">
        <h2 className="performance">Available Builds</h2>
      </div>
      <div className="reqdata">
        <ReqComp />
      </div>
      <div className="bar1">
        <p className="performance"> Estimated Performance</p>
      </div>
      <div className="gameimages">
        <Card
          style={{ width: "17rem" }}
          className="card text-white"
          id="GamecardStyle"
        >
          <Card.Img src={PUBG} className="GameimgStyle" variant="top" alt="" />
          <Card.Body>
            <Card.Text>
              <div className="gameS">
                <p>Average FPS</p>
                <h3 className="pubgfps"> {pubgfps}</h3>
                <p>Resolution</p>
                <h3>{pubgreso} </h3>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        {/* <div className="firstgame">
          <img className="reqimg" src={PUBG} alt="" />
          <h2>Average FPS</h2>
          <h3 className="pubgfps"> {pubgfps}</h3>
          <h2>Resolution</h2>
          <h3>{pubgreso} </h3>
        </div> */}
        <Card
          style={{ width: "17rem" }}
          className="card text-white"
          id="GamecardStyle"
        >
          <Card.Img src={GTAV} className="GameimgStyle" variant="top" alt="" />
          <Card.Body>
            <Card.Text>
              <div className="gameS">
                <p>Average FPS</p>
                <h3> {gtafps}</h3>
                <p>Resolution</p>
                <h3> {gtareso}</h3>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        {/* <div className="secondgame">
          <img className="reqimg" src={GTAV} alt="" />
          <h2>Average FPS</h2>
          <h3> {gtafps}</h3>
          <h2>Resolution</h2>
          <h3> {gtareso}</h3>
        </div> */}
        <Card
          style={{ width: "17rem" }}
          className="card text-white"
          id="GamecardStyle"
        >
          <Card.Img src={Apex} className="GameimgStyle" variant="top" alt="" />
          <Card.Body>
            <Card.Text>
              <div className="gameS">
                <p>Average FPS</p>
                <h3> {apexfps}</h3>
                <p>Resolution</p>
                <h3> {apexreso}</h3>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        {/* <div className="thirdgame">
          <img className="reqimg" src={Apex} alt="" />
          <h2>Average FPS</h2>
          <h3> {apexfps}</h3>
          <h2>Resolution</h2>
          <h3> {apexreso}</h3>
        </div> */}
      </div>
      <hr ></hr>
      
    </>
  );
};

export default RequirementPC;
