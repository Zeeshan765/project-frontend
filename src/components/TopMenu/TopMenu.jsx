import React from "react";
import { Link } from "react-router-dom";
import Account from "../../Assets/account.png";
// import pcbuildicon from "../../Assets/pcbuildicon.png";
import Cart from "../../Assets/cart.png";
import apiService from "../../services/ApiService";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; 
import "./TopMenu.css";
import { useState, useEffect } from "react";
import {
  AccountBox,
  AccountCircleTwoTone,
  LocalMall,
  ShoppingBasket,
  ShoppingCartOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import {
  MenuItem,
  Tooltip,
  Button,
  Avatar,
  Container,
  MenuIcon,
  Menu,
  Typography,
  IconButton,
  Toolbar, 
  Box,
  AppBar,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(100),
    marginTop: theme.spacing(2),
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    width: "100px",
    color: "#ad69f0",
    padding: "7px",
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: theme.spacing(8),
    "&:hover": {
      backgroundColor: "rgb(135, 62, 202)",
      color: "#e0d3ed",
      transition: "0.5s",
      borderRadius: "10px",
    },
  },
  iconLogin: {
    fontSize: 60,
    color: "white",
    marginRight: "20px",
    marginTop: theme.spacing(1),
    "&:hover": {
      color: "#a839ed",
      cursor: "pointer",
    },
  },
  iconCart: {
    fontSize: 60,
    marginTop: theme.spacing(1),
    color: "white",
    "&:hover": {
      color: "#a839ed",
    },
  },
}));

const pages = ["Home", "Components", "Peripherals", "About Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout", "MyOrders"];

const handleProfile = () => {
  window.location.href = "/profile";
};
const handleorders = () => {
  window.location.href = "/myorders";
};

const TopMenu = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  //const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
  //Logout
  const handlelogout = (e) => {
    // localStorage.setItem('token', '');
    localStorage.removeItem("token");
    //removeCookie("cart");
    window.location.href = "/login";
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  //Get Cart Count
  const getCountData = () => {
    apiService.get("/api/data/carts/length").then((res) => {
      setCount(res.data);
    });
  };
  React.useEffect(getCountData, [props.clicked]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="Sticky"
      style={{
        backgroundColor: "#2c2c30",
        boxShadow: "4px 4px 8px 0px #140c1c",
        height: "80px",
      }}
    >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          MoC
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/components" className={classes.link}>
            Components
          </Link>
          <Link to="/peripherals" className={classes.link}>
            Products
          </Link>
          <Link to="/about-us" className={classes.link}>
            About Us
          </Link>
        </div>
        <div className="icons">
          {!apiService.isLoggedIn() ? (
            <Link to="/login">
              <AccountBox className={classes.iconLogin} />
            </Link>
          ) : (
            // <img onClick={handleProfile} src={Account} alt='' />
            <Popup
              className="popup-content"
              trigger={<AccountBox className={classes.iconLogin} />}
              position="bottom center"
            >
              <h4 className="editProfile" onClick={handleProfile}>
                View Profile
              </h4>
              <h4 className="editProfile" onClick={handleorders}>
                My Orders
              </h4>
              <h4 className="editProfile" onClick={handlelogout}>
                Logout
              </h4>
            </Popup>

            //<button onClick={handlelogout}>Logout</button>
          )}
          {/* <Link to="/CustomBuildCart">
          <img src={pcbuildicon} alt="" />
        </Link> */}
          <Link to="/shop-cart">
            <ShoppingCart className={classes.iconCart} />
            <span className="cartCount">{count}</span>
          </Link>
        </div>
      </Toolbar>
    </AppBar>

    // <nav className="menu-container">
    //   <div className="middle-part">
    //     {(toggleMenu || screenWidth > 500) && (
    //       <ul className="list">
    //         <li className="items">
    //           <Link to="/" className="left-part">
    //             MoC
    //           </Link>
    //         </li>
    //         <li className="items">
    //           <Link to="/" className="link-color">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="items">
    //           <Link to="/components" className="link-color">
    //             Components
    //           </Link>
    //         </li>
    //         <li className="items">
    //           <Link to="/peripherals" className="link-color">
    //             Peripherals
    //           </Link>
    //         </li>
    //         <li className="items">
    //           <Link to="/about-us" className="link-color">
    //             About Us
    //           </Link>
    //         </li>
    //       </ul>
    //     )}
    //   </div>

    //   <div className="right-part">
    //     {!apiService.isLoggedIn() ? (
    //       <Link to="/login">
    //         <img src={Account} alt="" />
    //       </Link>
    //     ) : (
    //       // <img onClick={handleProfile} src={Account} alt='' />
    //       <Popup
    //         className="popup-content"
    //         trigger={<img className="accImg" src={Account} />}
    //         position="bottom center"
    //       >
    //         <h4 className="editProfile" onClick={handleProfile}>
    //           View Profile
    //         </h4>
    //         <h4 className="editProfile" onClick={handlelogout}>
    //           Logout
    //         </h4>
    //       </Popup>

    //       //<button onClick={handlelogout}>Logout</button>
    //     )}
    //     {/* <Link to="/CustomBuildCart">
    //       <img src={pcbuildicon} alt="" />
    //     </Link> */}
    //     <Link to="/shop-cart">
    //       <img src={Cart} alt="" />
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default TopMenu;
