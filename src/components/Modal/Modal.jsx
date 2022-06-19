import React, { useState } from "react";
import "./Modal.css";
import { FaLaptop } from 'react-icons/fa';
import Cart from "../CustomPC/CustomPCScreen/CustomCart"
export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <FaLaptop size={70} onClick={toggleModal} className="btn-modal">
    click me
      </FaLaptop>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <Cart/>
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}</>
     
  );
}
