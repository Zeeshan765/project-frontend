import React from "react";
import { useDispatch } from "react-redux";
import useState from "react-usestateref";
import { addRam } from "../../../Redux/cartRedux";
import "./RamComp.css";
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
import "./customCards.css";

function RamComp({ product }) {
  console.log(product);
  const [ramValue, setRamValue, ramValueRef] = useState(4);

  const dispatch = useDispatch();
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
                  <h4>{(product.price * ramValueRef.current) / 4}</h4>
                  <p>{product.description}</p>
                </Card.Text>
              </Card.Body>
              <div>
                <select
                  name="ram"
                  id="ram"
                  className="ramDropDown"
                  onChange={(e) => {
                    setRamValue(e.target.value);
                  }}
                >
                  <option value="4">1x4</option>
                  <option value="8">2x4</option>
                  <option value="8">1x8</option>
                  <option value="16">2x8</option>
                  <option value="16">1x16</option>
                  <option value="32">2x16</option>
                </select>
              </div>
              <Card.Footer>
                <Button
                  className="card-btn"
                  onClick={() => {
                    dispatch(
                      addRam({
                        ...product,
                        price: (product.price * ramValueRef.current) / 4,
                        ramValue: ramValueRef.current,
                        orgPrice: product.price,
                      })
                    );
                  }}
                >
                  Add
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
    // <>
    //   <div className="card-container">
    //     <div className="card-upper-part">
    //       <img src={product.picture} alt="" />
    //     </div>
    //     <div className="card-lower-part">
    //       <h3>{product.name}</h3>
    //       <p>{product.company}</p>
    //       <h4>{product.price}</h4>

    //       <div>
    //       <select
    //         name='ram'
    //         id='ram'
    //         className="ramDropDown"
    //         onChange={(e) => {
    //           setCategory(e.target.value);
    //         }}
    //       >

    //         <option value='4'>1x4</option>
    //         <option value='8'>2x4</option>
    //         <option value='8'>1x8</option>
    //         <option value='16'>2x8</option>
    //         <option value='16'>1x16</option>
    //         <option value='32'>2x16</option>
    //       </select></div>
    //       <button
    //         className="view-btn"
    //         onClick={() => {
    //           dispatch(addRam(product));
    //         }}
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
}

export default RamComp;
