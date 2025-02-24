import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import "../components/modal.css"
import { replace, useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  //handle tab cahnge
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const location = useLocation();
  const navigate = useNavigate();

  const form = location.state?.form?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your Order is placed succesfully!")
    localStorage.removeItem("cart");
    navigate(form, {replace: true});
  }

  return (
    <div className='modalCard'>
      <Button variant='primary' className='py-2' onClick={handleShow}> Proceed to Checkout</Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal fade'
        centerd
      >
        <div className="modal-dialog">
          <h3 className="px-3 mb-3">Select Your Payment Method</h3>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                      id='visa-tab' data-toggle="tab" role='tab' aria-controls='visa' aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"><img src="https://imgur.com/sB4jftM.png" alt="" width="80" /></a>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                      id='paypal-tab' data-toggle="tab" role='tab' aria-controls='paypal' aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"><img src="https://imgur.com/yK7EDD1.png" alt="" width="80" /></a>
                  </li>
                </ul>

                {/* content */}
                <div className="tab-content " id='myTabContent'>
                  {/* visa content */}
                  <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                    id='visa'
                    role='tabpanel'
                    aria-labelledby='visa-tab'
                  >
                    <div className="mt-4 mmx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input type="text " name='name' id='name' className='form-control' required />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input type="text " name='number' id='number'
                            min='1' max='999' className='form-control' required />
                          <span>Card Number</span>
                          <i className='fa fa-eye'></i>
                        </div>
                        <div className='d-flex flex-row'>
                          <div className="inputbox">
                            <input type="text " name='number' id='number'
                              min='1' max='999' className='form-control' required />
                            <span>Expiration Date</span>
                          </div>
                          <div className="inputbox">
                            <input type="text " name='number' id='number'
                              min='1' max='999' className='form-control' required />
                            <span>CVV</span>
                          </div>
                        </div>

                        <div className="px-5 pay">
                          <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order now</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                    id='paypal'
                    role='tabpanel'
                    aria-labelledby='paypal-tab'
                  >
                    <div className="mt-4 mmx-4">
                      <div className="text-center">
                        <h5>Paypal Acount Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input type="text " name='name' id='name' className='form-control' required />
                          <span>Enter your email</span>
                        </div>
                        <div className="inputbox">
                          <input type="text " name='number' id='number'
                            min='1' max='999' className='form-control' required />
                          <span>Your name</span>
                        </div>
                        <div className='d-flex flex-row'>
                          <div className="inputbox">
                            <input type="text " name='number' id='number'
                              min='1' max='999' className='form-control' required />
                            <span>Extr info</span>
                          </div>
                          <div className="inputbox">
                            <input type="text " name='number' id='number'
                              min='1' max='999' className='form-control' required />
                            <span></span>
                          </div>
                        </div>

                        <div className="px-5 pay">
                          <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add paypal</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* payment desclaimer */}
                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer</em> In no event shall payment or partial payment by Owner for any materrial or service</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CheckOutPage