import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./Invoice.css";

const Invoice = () => {

  const invoices = [
    { id: "#323534", customer: "Lindsey Curtis", creation: "August 7, 2028", due: "February 28, 2028", total: "$999", status: "Paid" },
    { id: "#323535", customer: "John Doe", creation: "July 1, 2028", due: "January 1, 2029", total: "$1200", status: "Unpaid" },
    { id: "#323536", customer: "Jane Smith", creation: "June 15, 2028", due: "December 15, 2028", total: "$850", status: "Draft" },
    { id: "#323537", customer: "Michael Brown", creation: "May 10, 2028", due: "November 10, 2028", total: "$1500", status: "Paid" },
    { id: "#323538", customer: "Emily Davis", creation: "April 5, 2028", due: "October 5, 2028", total: "$700", status: "Unpaid" },
    { id: "#323539", customer: "Chris Wilson", creation: "March 1, 2028", due: "September 1, 2028", total: "$1100", status: "Paid" },
    { id: "#323540", customer: "Jessica Lee", creation: "February 20, 2028", due: "August 20, 2028", total: "$950", status: "Draft" },
    { id: "#323541", customer: "David Kim", creation: "January 15, 2028", due: "July 15, 2028", total: "$1300", status: "Paid" },
    { id: "#323542", customer: "Sarah Clark", creation: "December 10, 2027", due: "June 10, 2028", total: "$800", status: "Unpaid" },
  ];

  return (
    <>
      <div className="container invoice-page">
        <div className="d-flex justify-content-between align-items-center mb-4 invoice-heading">
          <h3>Invoices</h3>
          <Link to="/" className="route-home">
            <button className="btn home-btn">Home</button>
          </Link>
        </div>

        {/* Overview Section */}
        <div className='card p-4 mb-4'>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fs-5">Overview</h5>
            <Link to="/createinvoice">
              <button className="btn btn-primary btn-sm">+ Create an Invoice</button>
            </Link>
          </div>

          <div className='d-flex flex-wrap gap-3'>
            <div className='overview-card'>
              <h5>Overdue</h5>
              <p>$120.80</p>
            </div>
            <div className='overview-card'>
              <h5>Due within next 30 days</h5>
              <p>0.00</p>
            </div>
            <div className='overview-card'>
              <h5>Average time to get paid</h5>
              <p>24 days</p>
            </div>
            <div className='overview-card'>
              <h5>Upcoming Payout</h5>
              <p>$3,450.50</p>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="card p-4 shadow-sm">
          <div className="d-flex justify-content-end align-items-center mb-3 gap-2 flex-wrap">
            <input type="text" className="form-control form-control-sm w-auto" placeholder="Search..." />
            <button className="btn btn-outline-secondary btn-sm">Filter</button>
            <button className="btn btn-outline-secondary btn-sm">Export</button>
          </div>

          {/* Table */}
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Customer</th>
                <th>Creation Date</th>
                <th>Due Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.length > 0 ? (
                invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td>{invoice.id}</td>
                    <td>{invoice.customer}</td>
                    <td>{invoice.creation}</td>
                    <td>{invoice.due}</td>
                    <td>{invoice.total}</td>
                    <td>
                      <span
                        className={`status-badge ${invoice.status === "Paid"
                          ? "paid"
                          : invoice.status === "Unpaid"
                            ? "unpaid"
                            : "draft"
                          }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-3">
                    No invoices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Invoice;
