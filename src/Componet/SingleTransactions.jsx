import React from 'react'
import "./SingleTransactions.css"
import { Link } from 'react-router-dom'
import { FaCartShopping, FaCreditCard, FaEnvelope } from 'react-icons/fa6';

const SingleTransactions = () => {
  const products = [
    { id: 1, name: "Macbook pro 13", qty: 1, cost: 1200, discount: 0 },
    { id: 2, name: "Apple Watch Ultra", qty: 1, cost: 300, discount: 50 },
    { id: 3, name: "iPhone 15 Pro Max", qty: 2, cost: 800, discount: 0 },
    { id: 4, name: "iPad Pro 3rd Gen", qty: 1, cost: 900, discount: 0 },
  ];

  const calcTotal = (item) => {
    const discountedPrice = item.cost - (item.cost * item.discount) / 100;
    return (discountedPrice * item.qty).toFixed(2);
  };

  const [qty, setQty] = React.useState(1);

  const handleViewReceipt = () => {
    alert("Viewing Receipt...");
  };

  const handleRefund = () => {
    const confirmRefund = window.confirm("Are you sure you want to refund?");
    if (confirmRefund) {
      alert("Refund processed!");
    }
  };


  return (
    <>
      <div className="container SingleTransactions-page">
        <div className="d-flex justify-content-between align-items-center SingleTransactions-heading">
          <h2>SingleTransactions</h2>
          <Link to="/" className="route-home">
            <button className="btn home-btn">Home</button>
          </Link>
        </div>

        <div className='SingleTransactions-id d-flex justify-content-between mt-3'>
          <div className='SingleTransactions-text d-flex'>
            <h5>Order ID : #34834</h5>
            <p>Due date: 25 August 2025</p>
          </div>
          <div>
            <div className='SingleTransactions-button d-flex'>
              <button onClick={handleViewReceipt}>View Receipt</button>
              <button onClick={handleRefund}>Refund</button>
            </div>

          </div>
        </div>

        <div className='Order-Details d-flex'>
          {/* *************Left-Side************** */}
          <div className='col-md-8 Order-Table'>
            <h3>Order Details</h3>
            <div className='Order-Data'>
              <table className="table-data align-middle table-bordered invoice-table">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Unit Cost</th>
                    <th>Discount</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{item.name}</td>
                      <td>{item.qty}</td>
                      <td>${item.cost}</td>
                      <td>{item.discount}%</td>
                      <td>${calcTotal(item)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="order-summary d-flex justify-content-end mt-4">
                <div className="summary-box text-end">
                  <h6 className="mb-3">Order summary</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Sub Total</span>
                    <p>$3850.00</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Vat (10%)</span>
                    <p>$385.00</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between total-line">
                    <strong>Total</strong>
                    <strong>$4,235.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ********************Right-Side******************** */}
          <div className='col-md-4'>
            <div className="Customer-Details">
              <h3>Customer Details</h3>

              <div className="detail-row">
                <span className="label">Name</span>
                <span className="value">Mushafrof Chowdhury</span>
              </div>

              <div className="detail-row">
                <span className="label">Email</span>
                <span className="value">name@example.com</span>
              </div>

              <div className="detail-row">
                <span className="label">Phone</span>
                <span className="value">Mountain View, CA, 94040</span>
              </div>

              <div className="detail-row">
                <span className="label">Phone</span>
                <span className="value">+123 456 7890</span>
              </div>

              <div className="detail-row">
                <span className="label">Country</span>
                <span className="value">United States</span>
              </div>

              <div className="detail-row">
                <span className="label">Address</span>
                <span className="value">
                  62 Miles Drive St, Newark, NJ 07103, California.
                </span>
              </div>
            </div>

            {/* **************Order-History******************************* */}
            <div className="Order-History">
              <h3>Order History</h3>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="icon-circle">
                    <FaCartShopping />
                  </div>
                  <div className="timeline-content">
                    <p className="title">Checkout Started</p>
                    <p className="subtitle">via tailadmin.com</p>
                  </div>
                  <div className="timeline-time">
                    <p>12:54</p>
                    <p>12th Apr 28</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="icon-circle">
                    <FaCreditCard />
                  </div>
                  <div className="timeline-content">
                    <p className="title">Purchased</p>
                    <p className="subtitle">for US$4,235 via PayPal</p>
                  </div>
                  <div className="timeline-time">
                    <p>12:58</p>
                    <p>12th Apr 28</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="icon-circle">
                    <FaEnvelope />
                  </div>
                  <div className="timeline-content">
                    <p className="title">Receipt Email Sent</p>
                    <p className="subtitle">Receipt #1734535</p>
                  </div>
                  <div className="timeline-time">
                    <p>12:58</p>
                    <p>12th Apr 28</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button>Resend</button>
                <button>Forward</button>
                <button>Preview</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default SingleTransactions