import React from "react";
import { useState } from "react";
import HddComp from "./HddComp";
import { useSelector, useDispatch } from "react-redux";
import SsdComp from "./SsdComp";
import { getfixedHddCount, resetSataPorts } from "../../../Redux/cartRedux";
import apiService from "../../../services/ApiService";
import "./Storage.css";

function Storage(props) {
  function handleChange() {}

  console.log(props);
  console.log(useSelector(getfixedHddCount));
  const [products, setProducts] = useState([]);
  const [hdd, setHdd] = useState();
  const [sataCount, setSataCount] = useState(0);
  React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="parentStorage">
      <h1 className="hddtitle">HDD</h1>
      <p className="SataPorts">
        Free Sata Ports: {useSelector(getfixedHddCount)}
        {/* <button onClick={() => dispatch(resetSataPorts())} className="reset">
          {" "}
          Reset Ports
        </button> */}
      </p>
      <div className="hdd">
        <div className="hdddrops"></div>
        {products
          .filter((product) => product.category === "Hdd")
          .map((product, index) => (
            <HddComp key={index} product={product} />
          ))}
      </div>
      <h1 className="ssdTitle">SSD</h1>
      <div className="ssd">
        {products
          .filter((product) => product.category === "Ssd")
          .map((product, index) => (
            <SsdComp key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Storage;
