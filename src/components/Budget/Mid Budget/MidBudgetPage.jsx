import React, { useState } from "react";
import "./MidBudgetPage.css";

import SingleMidBudget from "./SingleMidBudget";
import apiService from "../../../services/ApiService";
const MidBudgetPage = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    apiService.getBuild().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="midbudget-container">
        {products
          .filter((products) => products.category === "med budget")
          .map((products, index) => (
            <SingleMidBudget key={index} data={products} />
          ))}
      </div>
    </>
  );
};

export default MidBudgetPage;

/*
{ itemData.filter((data) =>
(data.category === "Low Budget")
  ).map((data, index) => (
         
    <SingleLowBudget key={index} data={data} />
  
   ))}
*/
