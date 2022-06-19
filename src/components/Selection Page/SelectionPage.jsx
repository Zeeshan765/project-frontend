import React from "react";
import { useHistory } from "react-router";
import custompc from "../../Assets/custompc.png";
import requirmentpc from "../../Assets/requirmentpc.png";
import budgetpc from "../../Assets/budgetpc.png";
import "./SelectionPage.css";

import Card from "react-bootstrap/Card";
import { useState } from "react";

const SelectionPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  /* Click on Budget Box It Navigate to budget page */
  const handlebudget = () => {
    history.push("/budget");
  };
  const handleRequirement = () => {
    history.push("/requirement");
  };

  const handleCustom = () => {
    history.push("/Custom-Screen");
  };

  return (
    <div className="selection-container">
      <h1 className="mainheading">Welcome to Multiverse of Computers</h1>
      <div className="selection-wrapper">
        <>
          <Card
            onClick={handleCustom}
            style={{ width: "25rem" }}
            className="card text-white bg-secondary"
            id="CustomCard"
          >
            <Card.Img className="imgStyle" variant="top" src={custompc} />
            <Card.Body>
              <Card.Title className="cardTitle">Fully Customized PC</Card.Title>
              <Card.Text>
                <h4 className="cardDesc">
                  Choose desired components and build customised computer from
                  scratch
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            id="CustomCard"
            onClick={handleRequirement}
            style={{ width: "25rem" }}
            className="card text-white bg-secondary"
          >
            <Card.Img className="imgStyle" variant="top" src={requirmentpc} />
            <Card.Body>
              <Card.Title className="cardTitle">Requirements Based</Card.Title>
              <Card.Text>
                <h4 className="cardDesc">
                  Get a Computer system according to your requirements such as
                  Resolution and FPS
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            id="CustomCard"
            onClick={handlebudget}
            style={{ width: "25rem" }}
            className="card text-white bg-secondary"
          >
            <Card.Img className="imgStyle" variant="top" src={budgetpc} />
            <Card.Body>
              <Card.Title className="cardTitle">Budget Based</Card.Title>
              <Card.Text>
                <h4 className="cardDesc">
                  Get a computer system according to your budget
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
        {/* <div className='selection-box' onClick={handleCustom}>
          <div className='first-part'>
            <img src={custompc} alt='' />
          </div>
          <div className='last-part'>
            <h2>Fully Customised PC</h2>
            <h4>
              Choose desired components and build customised computer from
              scratch
            </h4>
          </div>
        </div> */}

        {/* <div className="selection-box" onClick={handleRequirement}>
          <div className="first-part">
            <img src={requirmentpc} alt="" />
          </div>
          <div className="last-part">
            <h2>Requirements Based</h2>
            <h4>
              Get a Computer system according to your requirements such as
              Resolution and FPS
            </h4>
          </div>
        </div> */}

        {/* <div className="selection-box" onClick={handlebudget}>
          <div className="first-part">
            <img src={budgetpc} alt="" />
          </div>
          <div className="last-part">
            <h2>Budget Based</h2>
            <h4>Get a computer system according to your budget</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SelectionPage;
