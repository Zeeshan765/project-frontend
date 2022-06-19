import React from "react";
import { useHistory } from "react-router";
import mainvideo from "../../Assets/mainvideo.mp4";
import Circle from "../../Assets/Circle.svg";
import bg from "../../Assets/bgp.jpeg";
import fp from "../../Assets/fp.jpg";
import TrendingProducts from "./TrendingProducts";
import "./Landing.css";
import CarouselComp from "../CarouselComp/CarouselComp";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "../Chat/Chat";
import Footer from "../Footer/Footer";

const Landing = () => {
  const history = useHistory();

  /* Click on Start your  Build Button */
  const handleClick = (props) => {
    history.push("/selection");
  };

  return (
    <div className="land-cointainer">
      <div className="video-section">
        <div className="bgfull">
          <img width="2020" height="900" src={bg}></img>
        </div>
        <div className="content-section">
          <div className="left-content">
            <p className="pcText">Personal Computers Made Easy</p>
            <p className="belowText">
              All PCs You need in One Marketplace, The Best Place to Build
              <span className="TextPC">Custom PCs</span>
            </p>

            <Button className="btnStart" size="lg" onClick={handleClick}>
              Start Your Build!
            </Button>
          </div>
          <div className="right-content">
            <img src={fp} alt="circle1" className="bchain-img" />
          </div>
        </div>
      </div>

      <div className="carousel-container">
        <div className="trend-heading">
          {/* <p className="trendText">Trending Products</p> */}
        </div>
        <div className="product-container">
          <CarouselComp />
        </div>
        {/* <Chat />  */}
      </div>

      {/* <div className="trendContainer">
        <div className="trendHeading">
          <p className="textTrend">Trending Products</p>
        </div>
        <div className="cards">
          <TrendingProducts />
        </div>
      </div> */}
      <Chat />
      <Footer />
    </div>
  );
};

export default Landing;
