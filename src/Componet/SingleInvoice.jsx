import React from 'react'
import "./SingleInvoice.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { FaPrint } from 'react-icons/fa';
import jsPDF from 'jspdf';

const SingleInvoice = () => {

    const products = [
        { id: 1, name: "Macbook Pro 13", quantity: 1, unitCost: 1200, discount: 0, total: 1200 },
        { id: 2, name: "Apple Watch Ultra", quantity: 1, unitCost: 300, discount: 50, total: 250 },
        { id: 3, name: "iPhone 15 Pro Max", quantity: 3, unitCost: 800, discount: 0, total: 2400 },
        { id: 4, name: "iPad Pro 3rd Gen", quantity: 1, unitCost: 900, discount: 0, total: 900 },
    ];

    const subTotal = products.reduce((sum, p) => sum + p.total, 0);
    const vat = subTotal * 0.1;
    const total = subTotal + vat;

    // FIXED: Works with the data above
    const handleDownloadBill = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(14);
        pdf.text("Invoice #348", 20, 20);
        pdf.text("From: Pimjo LLC", 20, 30);
        pdf.text("To: Albert Word", 20, 40);
        pdf.text("Issued On: 11 March, 2027", 20, 50);
        pdf.text("Due On: 16 March, 2027", 20, 60);

        pdf.text("Products:", 20, 80);
        let yPos = 90;
        products.forEach((item, index) => {
            pdf.text(`${index + 1}. ${item.name} (${item.quantity} x $${item.unitCost}) - $${item.total}`, 20, yPos);
            yPos += 10;
        });

        pdf.text(`Sub Total: $${subTotal.toFixed(2)}`, 20, yPos + 10);
        pdf.text(`VAT (10%): $${vat.toFixed(2)}`, 20, yPos + 20);
        pdf.text(`Total: $${total.toFixed(2)}`, 20, yPos + 30);

        pdf.save("Invoice_348.pdf");
    };

    return (
        <div className="container SingleInvoice-page">
            <div className="d-flex justify-content-between align-items-center singleinvoice-heading">
                <h2>Single Invoice</h2>
                <Link to="/" className="route-home">
                    <button className="btn home-btn">Home</button>
                </Link>
            </div>

            <div className="card shadow-sm rounded-4 p-4">
                <div className='Invoice d-flex justify-content-between'>
                    <h3>Invoice</h3>
                    <p>ID : #348</p>
                </div>

                <div className='invoice-details d-flex justify-content-between mt-3'>
                    <div className='From'>
                        <h5>From</h5>
                        <h4>Pimjo LLC</h4>
                        <p>1280, Clair Street, <br /> Massachusetts, New York - 02543</p>
                        <p>Issued On: <br /><span>11 March, 2027</span></p>
                    </div>
                    <div className='To'>
                        <h5>To</h5>
                        <h4>Albert Word</h4>
                        <p>355, Shobe Lane <br /> Colorado, Fort Collins - 80543</p>
                        <p>Due On: <br /><span>16 March, 2027</span></p>
                    </div>
                </div>

                <div className='Invoice-bill mt-4'>
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
                            {products.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.unitCost}</td>
                                    <td>{item.discount}%</td>
                                    <td>${item.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex flex-column align-items-end me-2 invoice-summary">
                        <p>Sub Total amount: <strong>${subTotal.toFixed(2)}</strong></p>
                        <p>VAT (10%): <strong>${vat.toFixed(2)}</strong></p>
                        <h5 className="fw-bold mt-2">Total : ${total.toFixed(2)}</h5>
                    </div>

                    <div className="d-flex justify-content-end mt-4 gap-3">
                        <button className="btn btn-outline-primary px-4">Proceed to payment</button>
                        <button
                            className="btn btn-primary px-4 d-flex align-items-center gap-2"
                            onClick={handleDownloadBill}
                        >
                            <FaPrint /> Print
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleInvoice;
