import React from 'react'
import "./CreateInvoice.css"
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa';

const CreateInvoice = () => {

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

  return (
    <>
      <div className="container CreateInvoice-page">
        <div className="d-flex justify-content-between align-items-center invoice-heading">
          <h2>Create Invoice</h2>
          <Link to="/" className="route-home">
            <button className="btn home-btn">Home</button>
          </Link>
        </div>

        <div className="invoice-card shadow-sm p-4">
          <h4 className="mb-4 fw-bold">Create Invoice</h4>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Invoice Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="WP-3434434"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John Deniyal"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Customer Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter customer address"
            />
          </div>

          <div className="table">
            <table className="table align-middle table-bordered invoice-table">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Products</th>
                  <th>Quantity</th>
                  <th>Unit Cost</th>
                  <th>Discount</th>
                  <th>Total</th>
                  <th></th>
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
                    <td className="text-center">
                      <button className="btn btn-sm btn-outline-danger">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='product-details'>
            <div className="save-product row g-3 p-4">
              <div className="col-md-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                />
              </div>

              {/* Quantity with + and - */}
              <div className="col-md-2">
                <label className="form-label fw-semibold">Quantity</label>
                <div className="quantity-box d-flex align-items-center justify-content-between rounded border">
                  <button
                    className="qty-btn"
                    type="button"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  >
                    −
                  </button>

                  <input
                    type="number"
                    className="qty-input text-center"
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    min="1"
                  />

                  <button
                    className="qty-btn"
                    type="button"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="col-md-2">
                <label className="form-label">Discount</label>
                <select className="form-select">
                  <option value="">Select Discount</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="15">50%</option>
                </select>
              </div>

              <div className="col-md-2 d-flex align-items-end">
                <button className="btn btn-primary w-100">Save Product</button>
              </div>
            </div>

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
                  <strong>$4235.00</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateInvoice