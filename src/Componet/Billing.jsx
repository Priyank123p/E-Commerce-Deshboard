import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Billing.css";
import { FaCcMastercard, FaCcVisa, FaPaypal, FaFilePdf, FaDownload, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const Billing = () => {
  const invoices = [
    { id: 12, month: "May 2024", date: "May 01, 2024", price: "$120.00", plan: "Starter Plan", status: "Paid" },
    { id: 13, month: "June 2024", date: "June 01, 2024", price: "$120.00", plan: "Starter Plan", status: "Paid" },
    { id: 14, month: "July 2024", date: "July 01, 2024", price: "$120.00", plan: "Starter Plan", status: "Unpaid" },
    { id: 15, month: "August 2024", date: "August 01, 2024", price: "$250.00", plan: "Pro Plan", status: "Paid" },
    { id: 16, month: "September 2024", date: "September 01, 2024", price: "$250.00", plan: "Pro Plan", status: "Paid" },
  ];

  // Function to download a single invoice as PDF
  const handleDownloadInvoice = (invoice) => {
    const pdf = new jsPDF();
    pdf.text(`Invoice #${invoice.id} – ${invoice.month}`, 20, 20);
    pdf.text(`Date: ${invoice.date}`, 20, 30);
    pdf.text(`Price: ${invoice.price}`, 20, 40);
    pdf.text(`Plan: ${invoice.plan}`, 20, 50);
    pdf.text(`Status: ${invoice.status}`, 20, 60);
    pdf.save(`Invoice_${invoice.id}_${invoice.month}.pdf`);
  };

  return (
    <div className="container payment-page">
      <div className="d-flex justify-content-between align-items-center mb-4 billing-heading">
        <h3>Billing</h3>
        <Link to="/" className="route-home">
          <button className="btn home-btn">Home</button>
        </Link>
      </div>

      {/* Payment Methods Section */}
      <div className="card p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold fs-5">Payment Methods</h5>
          <button className="btn btn-primary btn-sm">+ Add New Card</button>
        </div>

        <div className="d-flex flex-wrap gap-3">
          {/* Mastercard */}
          <div className="payment-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaCcMastercard className="payment-icon text-danger fs-3" />
              <div>
                <h6 className="mb-0">Mastercard</h6>
                <span className="badge bg-success">Default</span>
              </div>
            </div>
            <p className="text-muted small mb-1">**** **** **** 9029</p>
            <p className="text-muted small mb-3">Expiry 01/24</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary btn-sm">Edit</button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>

          {/* Visa */}
          <div className="payment-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaCcVisa className="payment-icon text-primary fs-3" />
              <h6 className="mb-0">Visa</h6>
            </div>
            <p className="text-muted small mb-1">**** **** **** 4328</p>
            <p className="text-muted small mb-3">Expiry 01/25</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">Make Default</button>
              <button className="btn btn-outline-secondary btn-sm">Edit</button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>

          {/* PayPal */}
          <div className="payment-card">
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaPaypal className="payment-icon text-info fs-3" />
              <h6 className="mb-0">PayPal</h6>
            </div>
            <p className="text-muted small mb-3">name@example.com</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">Make Default</button>
              <button className="btn btn-outline-secondary btn-sm">Edit</button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices Section */}
      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold fs-5">Invoices</h5>
        </div>

        <table className="billing-table align-middle table table-borderless">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td>
                  <FaFilePdf className="text-danger me-2" />
                  Invoice #{inv.id} – {inv.month}
                </td>
                <td>{inv.date}</td>
                <td>{inv.price}</td>
                <td>{inv.plan}</td>
                <td>
                  <span className={`badge ${inv.status === "Paid" ? "bg-success" : "bg-danger"}`}>
                    {inv.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleDownloadInvoice(inv)}
                    >
                      <FaDownload />
                    </button>
                    <button className="btn btn-outline-dark btn-sm">
                      <FaEye />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
