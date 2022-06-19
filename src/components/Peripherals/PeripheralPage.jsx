import React, { useEffect } from "react";
import useState from "react-usestateref";
import "./PeripheralPage.css";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

import apiService from "../../services/ApiService";
import Singleperipheral from "./Singleperipheral";
import Pagination from "@material-ui/lab/Pagination";

import {
  AccountBox,
  AccountCircleTwoTone,
  LocalMall,
  ShoppingBasket,
  ShoppingCartOutlined,
  ShoppingCart,
  Search,
} from "@material-ui/icons";

const PeripheralPage = (props) => {
  const [keyword, setKeyword] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [price, setPrice] = useState([500, 100000]);
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(8);

  //Get Data
  const getData = () => {
    apiService.getProducts(page, perPage).then((res) => {
      setMenuData(res.data.products);
      setTotal(res.data.total);

      // console.log(res.data);
    });
  };
  useEffect(() => {
    getData();
    // console.log(menuDataRef.current);
  }, [page, perPage]);
  //Search Preipheral
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:4000/api/products/search/${keyword}`
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
        `http://localhost:4000/api/products/filter/${price[0]}/${price[1]}`
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
    apiService.get("/api/products/" + category).then((res) => {
      console.log(res.data);
      setMenuData(res.data);
    });
  };

  //Filter Data Here
  // const filterResult = (catName) => {
  //   const result = menuData.filter((currData) => {
  //     return currData.category === catName;
  //   });
  //   console.log(catName);
  //   console.log(result);
  //   setCatData(result);
  //   console.log(catData);
  // };

  return (
    <>
      <div className="MainContainer">
        <div className="mainTitle">
          Peripherals{" "}
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          />
          <Search className="IconStyle" />{" "}
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

              <Typography className="priceRangeText">
                Set price range
              </Typography>
            </div>
            <button className="left-btn" onClick={() => getData()}>
              All
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("Keyboard");
              }}
            >
              Keyboards
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("Mouse");
              }}
            >
              Mouse
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("controller");
              }}
            >
              Controller
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("Monitor");
              }}
            >
              Monitor
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("Headphone");
              }}
            >
              Headphones
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("speaker");
              }}
            >
              Speakers
            </button>
            <button
              className="left-btn"
              onClick={() => {
                filterResult("Mic");
              }}
            >
              Mic
            </button>
          </div>
          <div className="right-container">
            {menuData?.map((data, index) => (
              <Singleperipheral key={data._id} data={data} />
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
                props.history.push("/peripherals/" + value);
              }}
            />{" "}
            <p className="paginationText">
              Total: <b>{total}</b> Showing <b>{(page - 1) * perPage}</b> to{" "}
              <b>{(page - 1) * perPage + menuData.length}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeripheralPage;
