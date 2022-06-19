import React, { useState } from 'react';
import apiService from '../../services/ApiService';
import { toast } from 'react-toastify';
import './productDetail.css';
import { Typography } from '@material-ui/core';
import ProductRating from './ProductRating';

const ProductDetail = (props) => {
  const [quantity, setQuantity] = useState(1);

  const product = props.match.params.id;
  const type = "Product"
 // console.log(product);
  const [name, setName] = useState();
 
  const[reviews,setReviews] = useState([]);
  console.log("review");
  console.log(reviews)
  // const [items, setItems] = React.useState([]);
 
  // const total = items.reduce(function (accumulator, currentValue) {
  //   return accumulator + currentValue.price;
  // }, 0);
 
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [info1, setinfo1] = useState()
  const [info2, setinfo2] = useState()
  const [info3, setinfo3] = useState()
  const [info4, setinfo4] = useState()

  console.log({ name, price, description, image });
   React.useEffect(() => {
     apiService.get('/api/products/find/' + product).then((res) => {
       console.log(res.data);
       //setTemp(res.data);
       setName(res.data.name);
       setPrice(res.data.price);
      setDescription(res.data.description);
       setImage(res.data.picture);
       setinfo1(res.data.info1)
       setinfo2(res.data.info2)
       setinfo3(res.data.info3)
       setinfo4(res.data.info4)
    });
  }, []);
  // const handleaddtocart = (temp) => {

    
  //   let newCart = [...cookies.cart];
  //   newCart.push(temp);
  //   console.log(newCart);
  //   setCookie("cart", JSON.stringify(newCart));
  //   console.log(cookies)
  //   toast.success(temp.name + " added to Cart");
  // };


//Get Reviews
const getCommentData = () => {
  apiService.get(`/api/products/${product}/get/comments`).then((data) => {
    setReviews(data.data);
  });
};
React.useEffect(getCommentData, []);


  
  let incrementCount = () => {
    setQuantity(quantity + 1);
  };

  let decrementCount = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  //Handle Add To Cart Logic
  const handleaddtocart = (e) => {
    e.preventDefault();
    apiService
      .post('/api/data/carts', { product, quantity,type })
      .then((res) => {
        console.log(res.data);
        
        //window.location.reload();
        props.clicked(new Date());
        toast.success('Added To Cart Successfully',{
          theme:"colored"
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
          theme:"colored",
        });
      });
  };

  return (
    <>
      <div className='content'>
        <div className='main-detail'>
          <img

            src={image}
            className='detail-image'
            alt='React Bootstrap logo'
          />
        </div>
        <div className='prodata'>
          <p className='titleText'>Product: {name}</p>
          <hr></hr>
       
          <h4 className='info1'>➤ {info1}</h4>
          
          <br />
          <h4 className='info1'>➤ {info2}</h4>
         
          <br />
          <h4 className='info1'>➤ {info3}</h4>
         
          <br />
          <h4 className='info1'>➤ {info4}</h4>
        
          <br />  
          
          <p className='additioninfo'>Addition information </p>
          <h4 className='desc'>{description}</h4>
          <br />
          <hr></hr>

          <p className='priceText'>Price: {price}</p>
          <br />
          <hr></hr>
    

          <div className='buttonss'>
            <button
              style={{ height: '30px', width: '100px' }}
              className='btnDec'
              variant='primary'
              onClick={decrementCount}
            >
              -
            </button>
            <p className='countText'>{quantity}</p>
            <button
              className='btnInc'
              variant='primary'
              onClick={incrementCount}
            >
              +
            </button>
          </div>
          <br />

        

 <button disabled={!apiService.isLoggedIn()} className='cartBtn'onClick={handleaddtocart}>
      Add to Cart
    </button>

                
  

        
        </div>
       
      </div>



      <div className="pro-review">
          <h1 className="TextStyle">Product Reviews</h1>
        </div>
      {reviews?.map((review, index) => (
            <ProductRating key={index} review={review} />
          ))}
     
    </>
  );
};

export default ProductDetail;
