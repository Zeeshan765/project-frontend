import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "@material-ui/core/Slider";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import SingleComponent from "./SingleComponent";
import apiService from "../../services/ApiService";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

import {
  AccountBox,
  AccountCircleTwoTone,
  LocalMall,
  ShoppingBasket,
  ShoppingCartOutlined,
  ShoppingCart,
  Search,
} from "@material-ui/icons";

import "./ComponentsPage.css";

const ComponentsPage = (props) => {
  


  const [keyword, setKeyword] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [price, setPrice] = useState([500, 100000]);
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(8);

  const getData = () => {
    apiService.getComponentspage(page, perPage).then((res) => {
      setMenuData(res.data.components);
      setTotal(res.data.total);
    });
  };
  React.useEffect(getData, [page, perPage]);

  //Search Components
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://moc-server.herokuapp.com/api/components/search/${keyword}`
      );
      if (keyword.length > 0) {
        setMenuData(res.data);
      }
    };
    // if (keyword.length === 0 || keyword.length > 2) fetchData();
    fetchData();
  }, [keyword]);

  //Filter By Price
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://moc-server.herokuapp.com/api/components/filter/${price[0]}/${price[1]}`
      );
      //setPrice(res.data)
      setMenuData(res.data);
      //console.log(res.data)
    };
    // if (keyword.length === 0 || keyword.length > 2) fetchData();
    fetchData();
  }, [price]);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const filterResult = (category) => {
    apiService.get("/api/components/" + category).then((res) => {
      console.log(res.data);
      setMenuData(res.data);
    });
  };

  const location = useLocation();
  console.log(location.pathname);
  const getColor = (currentPath) => {
    if (location.pathname === currentPath) {
      return "#7110d1";
      // console.log("#7110d1");
    }
  };

  return (
    <>
      <div className="MainContainer">
        <div className="mainTitle">
          Components
          <InputGroup className="mb-4">
            <InputGroup.Text id="basic-addon1">
              {" "}
              <Search className="IconStyle" />
            </InputGroup.Text>
            <Form.Control
            className="SearchBarnew"
              placeholder="Search the components"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => setKeyword(e.target.value.toLowerCase())}
            />
          </InputGroup>
          {/* <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          />
          <Search className="IconStyle" />{" "} */}
        </div>
      </div>
      <div className="peripheral-container">
        <div className="left-container">
          <div className="filterBox">
            <Slider
              className="sliderText"
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              min={500}
              step={1000}
              max={100000}
            />

            <Typography className="priceRangeText">Set price range</Typography>
          </div>
          <Link>
          <li style={{ backgroundColor: getColor("") }} className="left-btn" onClick={() => getData()}>
            All
          </li>
          </Link>

          <Link>
          <li style={{ backgroundColor: getColor("Processor") }}
            className="left-btn"
            onClick={() => {
              filterResult("Processor");
            }}
          >
            Processor
          </li>
          </Link>
          <button style={{ backgroundColor: getColor() }}
            className="left-btn"
            onClick={() => {
              filterResult("Gpu");
            }}
          >
            GPU
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Motherboard");
            }}
          >
            Motherboard
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Psu");
            }}
          >
            PSU
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Hdd");
            }}
          >
            HDD
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Ssd");
            }}
          >
            SSD
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Ram");
            }}
          >
            RAM
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Casing");
            }}
          >
            Casings
          </button>
          <button
            className="left-btn"
            onClick={() => {
              filterResult("Cooler");
            }}
          >
            Cooler
          </button>
        </div>

        <div className="right-container">
          {menuData?.map((data, index) => (
            <SingleComponent key={index} data={data} />
          ))}
          <Pagination
            count={Math.ceil(total / perPage)}
            variant="outlined"
            className="pagination"
            shape="circular"
            color="primary"
            size="large"
            onChange={(e, value) => {
              console.log(value);
              props.history.push("/components/" + value);
            }}
          />{" "}
          <p className="paginationText">
            Showing <b>{(page - 1) * perPage}</b> -{" "}
            <b>{(page - 1) * perPage + menuData.length}</b> of <b>{total}</b>{" "}
            results
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ComponentsPage;
