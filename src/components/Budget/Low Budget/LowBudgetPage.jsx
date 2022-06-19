import React, { useState } from "react";
import "./LowBudgetPage.css";
import SingleLowBudget from "./SingleLowBudget";
import apiService from "../../../services/ApiService";

const LowBudgetPage = (props) => {
  const [products, setProducts] = useState([]);
  
  React.useEffect(() => {
    apiService.getBuild().then((res) => {
      setProducts(res.data);


      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="lowbudget-container">
        {products
          .filter((product) => product.category === "low budget")
          .map((product, index) => (
            <SingleLowBudget key={index} product={product} />
          ))}
        
      </div>
    </>
  );
};

export default LowBudgetPage;
