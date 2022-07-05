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
import { Link } from "react-router-dom";

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
      <section className="section" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="title-icon">
                <i className="mdi mdi-note-multiple-outline"></i>
              </div>
              <h1 className="section-title pt-5">
                Welcome to Multiverse of Computers
              </h1>
              <p className="section-subtitle text-dark pt-3">What we offer</p>
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-md-6 pt-4">
              <img
                src="images/custompc.png"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="mdi mdi-eye text-custom"></i>
                </div>
                <div className="features-desc">
                  <p className="boldfont">Fully Customized PC</p>
                  <p className="pt-2">
                    Choose desired components and build customised computer from
                    scratch.
                  </p>
                  {/* <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link> */}
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="row vertical-content">
            <div className="col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="mdi mdi-chart-bubble text-custom"></i>
                </div>
                <div className="features-desc">
                  <p className="boldfont">Requirements Based</p>
                  <p className="pt-2">
                    Get a Computer system according to your requirements such as
                    Resolution and FPS.
                  </p>
                  {/* <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <img
                src="images/requirmentpc.png"
                alt=""
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-md-6 pt-4">
              <img
                src="images/budgetpc3.png"
                alt=""
                className="img-fluid3 rounded"
              />
            </div>
            <div className="col-md-6">
              <div className="features-box">
                <div className="features-icon">
                  <i className="mdi mdi-fingerprint text-custom"></i>
                </div>
                <div className="features-desc">
                  <p className="boldfont">Budget Based</p>
                  <p className="pt-2">
                    {" "}
                    Get a computer system according to your budget.{" "}
                  </p>
                  {/* <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light" id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center">
                <div className="title-icon">
                  <i className="mdi mdi-note-multiple-outline"></i>
                </div>
                <h3 className="section-title pt-5">Our Pricing</h3>
                <p className="section-subtitle pt-3 text-muted">
                  Select The Budget Range.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="price-box p-5 bg-dark text-center mt-2">
                <div className="plan-price">
                  <h3>
                    <sup>pkr</sup>
                    <b>40,000 to 55,000</b>
                  </h3>
                </div>
                <div className="plan-name mt-4">
                  <h4>Low Budget</h4>
                </div>
                <div className="plan-desc mt-4">
                  <p className="mb-0 ">
                    Basic version with unique design & strong sound quality.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/budget/lowbudget"
                    className="btn btn-custom btn-rounded btnbuynow"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-box p-5 bg-dark text-center mt-1">
                <div className="plan-lable">
                  <p className="mb-3 text-uppercase">Popular</p>
                </div>
                <div className="plan-price">
                  <h3>
                    <sup>pkr</sup>
                    <b>60,000 to 80,000</b>
                  </h3>
                </div>
                <div className="plan-name mt-4">
                  <h4>Mid-Range Budget</h4>
                </div>
                <div className="plan-desc mt-4">
                  <p className="mb-0 ">
                    Basic version with unique design & strong sound quality.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/budget/midbudget"
                    className="btn btn-custom btn-rounded btnbuynow"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-box p-5 bg-dark text-center mt-4">
                <div className="plan-price">
                  <h3>
                    <sup>pkr</sup>
                    <b>90,000+</b>
                  </h3>
                </div>
                <div className="plan-name mt-4">
                  <h4>High-End Budget</h4>
                </div>
                <div className="plan-desc mt-4">
                  <p className="mb-0 ">
                    Basic version with unique design & strong sound quality.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/budget/highbudget"
                    className="btn btn-custom btn-rounded btnbuynow"
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="trendContainer">
        <div className="trendHeading">
          <p className="textTrend">Trending Products</p>
        </div>
        <div className="cards">
          <TrendingProducts />
        </div>
      </div> */}
      <Chat />
      {/* <Footer /> */}
      <Footer />;
    </div>
  );
};

export default Landing;
