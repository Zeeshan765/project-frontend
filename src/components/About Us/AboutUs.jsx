import React from "react";
import "./AboutUs.css";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Sher from "../../Assets/sher.jpg";
import Soban from "../../Assets/soban.jpg";
import Zeeshan from "../../Assets/zeeshan.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs-container">
        <h1 className="mainheading">About Us</h1>
        <Container>
          <p className="aboutustxt">
            <b className="moc">Multiverse of Computers</b> is an application that provides an
            interactive environment to the people around the country with a goal
            to provide the service of building personal computers with ease
            using our platform and support--and do it sitting at home through
            computer/laptop or mobile phone, whatever suits you best.{" "}
          </p>
          <p className="mainheadingourteam">Our Team</p>
        </Container>
        <div className="AboutUs-wrapper">
          <>
            <Card
              style={{ width: "25rem" }}
              className="card text-white bg-secondary"
              id="AboutUsCard"
            >
              <Card.Img className="imgStyleAboutUS" variant="top" src={Sher} />
              <Card.Body className="aboutuscardbody">
                <Card.Title className="cardTitleAboutUs">Sher Ali</Card.Title>
                <Card.Text>
                  <h4 className="cardDesc">Mobile/Web Developer</h4>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              id="AboutUsCard"
              style={{ width: "25rem" }}
              className="card text-white bg-secondary"
            >
              <Card.Img className="imgStyleAboutUS" variant="top" src={Soban} />
              <Card.Body>
                <Card.Title className="cardTitleAboutUs">
                  Soban Tariq
                </Card.Title>
                <Card.Text>
                  <h4 className="cardDesc">Frontend Developer/Designer</h4>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              id="AboutUsCard"
              style={{ width: "25rem" }}
              className="card text-white bg-secondary"
            >
              <Card.Img className="imgStyleAboutUS" variant="top" src={Zeeshan} />
              <Card.Body>
                <Card.Title className="cardTitleAboutUs">
                  Zeeshan Ashraf
                </Card.Title>
                <Card.Text>
                  <h4 className="cardDesc">Full-Stack Developer</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
