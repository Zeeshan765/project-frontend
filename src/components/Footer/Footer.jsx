import "./Footer.css";

import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaHome,
} from "react-icons/fa";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import React, { Component } from "react";

import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      subject: "",
      message: "",
      email_err: "",
      name_err: "",
      subject_err: "",
      message_err: "",
      return_msg: "",
      flag: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    var EmailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value === "") this.setState({ email_err: "Required Field" });
    else if (EmailReg.test(e.target.value)) this.setState({ email_err: "" });
    else this.setState({ email_err: "Enter Valid Email" });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
    if (e.target.value === "") this.setState({ name_err: "Required Field" });
    else this.setState({ name_err: "" });
  }
  handleChangeSubject(e) {
    this.setState({ subject: e.target.value });
    if (e.target.value === "") this.setState({ subject_err: "Required Field" });
    else this.setState({ subject_err: "" });
  }
  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
    if (e.target.message === "")
      this.setState({ message_err: "Required Field" });
    else this.setState({ message_err: "" });
  }

  handleSubmit1() {
    if (this.state.name === "") this.setState({ name_err: "Required Field" });
    if (this.state.email === "") this.setState({ email_err: "Required Field" });
    if (this.state.subject === "")
      this.setState({ subject_err: "Required Field" });
    if (this.state.message === "")
      this.setState({ message_err: "Required Field" });

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.subject === "" ||
      this.state.message === ""
    ) {
      this.setState({ return_msg: "Fill All First", flag: true });
    } else {
      this.setState({ return_msg: "Success.", flag: true });
    }
  }

  render() {
    return (
      <section className="pt-5 bg-dark" id="contact">
        <div className="container">
          <div className="row justify-content-center pt-5">
            <div className="col-md-8">
              <div className="text-center">
                <div className="title-icon">
                  <ContactMailIcon className="icons" />
                </div>
                <h3 className="section-titleContactUS text-white pt-5">Contact us</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="single-contact text-center text-white">
                    <PhoneAndroidIcon className="icons" />
                    <h4>Phone</h4>
                    <p>+92 300 6889886</p>
                    <p>+92 322 5589072</p>
                    <p>+92 309 5196521</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-contact text-center text-white">
                    <RoomIcon className="icons" />
                    <h4>Address</h4>
                    <p>COMSATS, Lahore</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-contact text-center text-white">
                    <EmailIcon className="icons" />
                    <h4>Email</h4>
                    <p>support@moc.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-5 pb-2">
            <div className="col-md-12">
              <div className="text-white footer-alt">
                <div className="float-right">
                  <ul className="list-inline social pb-0">
                    <li className="list-inline-item pl-2">Connect with us:</li>
                    <li className="list-inline-item pl-2">
                      <Link to="#" className="text-white">
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item pl-2">
                      <Link to="#" className="text-white">
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item pl-2">
                      <Link to="#" className="text-white">
                        <InstagramIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
