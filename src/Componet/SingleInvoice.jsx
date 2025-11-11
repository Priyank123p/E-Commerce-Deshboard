import React from 'react'
import "./SingleInvoice.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { FaPrint } from 'react-icons/fa';

const SingleInvoice = () => {
  return (
    <>
      <div className="container SingleInvoice-page">
        <div className="d-flex justify-content-between align-items-center singleinvoice-heading">
          <h2>SingleInvoice</h2>
          <Link to="/" className="route-home">
            <button className="btn home-btn">Home</button>
          </Link>
        </div>

        <div className="card shadow-sm rounded-4">
          <div className='Invoice d-flex justify-content-between'>
            <h3>Invoice</h3>
            <p>ID : #348</p>
          </div>

          <div className='invoice-details d-flex justify-content-between'>
            <div className='From'>
              <h5>From</h5>
              <h4>Pimjo LLC</h4>
              <p><span>1280, Clair Street, <br />
                Massachusetts, New York - 02543</span>
              </p>
              <p>Issued On: <br /> <span>11 March, 2027</span></p>
            </div>
            <div className='To'>
              <h5>To</h5>
              <h4>Albert Word</h4>
              <p><span>355, Shobe Lane <br />
                Colorado, Fort Collins - 80543</span>
              </p>
              <p>Due On: <br /> <span>16 March, 2027</span></p>
            </div>
          </div>

          <div className='Invoice-bill'>
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>S.No.#</th>
                  <th>Products</th>
                  <th>Quantity</th>
                  <th>Unit Cost</th>
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Macbook Pro 13</td>
                  <td>1</td>
                  <td>$48</td>
                  <td>0%</td>
                  <td>$1,200</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Apple Watch Ultra</td>
                  <td>1</td>
                  <td>$300</td>
                  <td>50%</td>
                  <td>$150</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>iPhone 15 Pro Max</td>
                  <td>3</td>
                  <td>$800</td>
                  <td>0%</td>
                  <td>$1,600</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>iPad Pro 3rd Gen</td>
                  <td>1</td>
                  <td>$900</td>
                  <td>0%</td>
                  <td>$900</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex flex-column align-items-end me-2 invoice-summary">
              <p>Sub Total amount: <strong>$3,098</strong></p>
              <p>Vat (10%): <strong>$312</strong></p>
              <h5 className="fw-bold mt-2">Total : $3,410</h5>
            </div>

            <div className="d-flex justify-content-end mt-4 gap-3">
              <button className="btn btn-outline-primary px-4">Proceed to payment</button>
              <button className="btn btn-primary px-4 d-flex align-items-center gap-2">
                <FaPrint /> Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleInvoice