import React ,{useState}from 'react';
import SingleTrending from './SingleTrending';
import "./TrendingProducts.css";
import apidata from "../../data.js";

const TrendingProducts = () => {
const[items,setItems] = useState(apidata);

  return (
  
  <div className='TrendingProduct-container'>
    {items.map((item, index) => (
            <SingleTrending key={index} item={item} />
          ))}


  </div>);
};

export default TrendingProducts;
