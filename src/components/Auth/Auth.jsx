import React from "react";
// import userService from "./../../services/UserService";
import apiService from "../../services/ApiService";
import { withRouter } from "react-router";
const Auth = (props) => {
  React.useEffect(() => {
    if (!apiService.isUser()) {
      props.history.push("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Auth);