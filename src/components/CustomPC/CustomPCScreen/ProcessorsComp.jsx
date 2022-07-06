import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/cartRedux";
import { Modal, Box } from '@material-ui/core'
import "./customCards.css";
// import apiService from "../../../services/ApiService";
import apiService from "../../../services/ApiService"
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";

//import $ from "jquery";
function ProcessorsComp({ product }) {
  const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [id, setId] = useState('');
//   const [name, setName] = useState();
//   const [price, setPrice] = useState();
//   const [info1, setinfo1] = useState();
//   const [info2, setinfo2] = useState();
//   const [info3, setinfo3] = useState();
//   const [info4, setinfo4] = useState();
// console.log(id)

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

  // React.useEffect(() => {
  //   apiService.get("/api/components/find/" + id).then((res) => {
  //   console.log("res")
  //     console.log(res.data);
    
  //         });
  // }, []);


  // function handleView() {
  //   console.log('view');
  //   setOpen(true);
  // }
  return (
    <>
      <Row s={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, id) => (
          <Col>
            <Card 
              style={{ width: "22rem" }}
              className="card text-white"
              id="Customcards"
            >
              <Card.Img
                className="imgStyle"
                variant="top"
                src={product.picture}
                alt=""
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <h4>{product.price} pkr</h4>
                  <p>{product.info1}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  className="card-btn"
                  onClick={() => {
                    dispatch(addProduct(product));
                  }}
                >
                  Add
                </Button>
                {/* <Button
                  className="card-btn"
                  onClick={() => {
                    handleView();
                    setId(product._id);
                  }}
                >
                  View Detail
                </Button> */}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>



      {/* <Modal
          // className="modal"
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <h2>{name}</h2>
            
          </Box>
        </Modal> */}









    </>
    // <>
    //   <div  className="card-container">
    //     <div className="card-upper-part">
    //       <img src={product.picture} alt="" />
    //     </div>
    //     <div className="card-lower-part">
    //       <h3>{product.name}</h3>
    //       <p>{product.company}</p>
    //       <h4>{product.price}</h4>

    //       <button
    //         onClick={() => {
    //           dispatch(addProduct(product));
    //         }}
    //         className="view-btn"
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
}

export default ProcessorsComp;
