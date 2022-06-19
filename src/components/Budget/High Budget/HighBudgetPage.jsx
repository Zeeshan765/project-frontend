import React, { useState } from "react";
import "./HighBudgetPage.css";
import SingleHighBudget from "./SingleHighBudget";

import apiService from "../../../services/ApiService";
//import budgetdata from "../budgetdata.js"

const HighBudgetPage = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    apiService.getBuild().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div className="highbudget-container">
        {products
          .filter((product) => product.category === "high budget")
          .map((product, index) => (
            <SingleHighBudget key={index} product={product} />
          ))}
      </div>
    </>
  );
};

export default HighBudgetPage;
