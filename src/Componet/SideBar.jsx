import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBar.css";

const SideBar = () => {
    const [openEcommerce, setOpenEcommerce] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <>
            <button
                className="btn btn-primary d-md-none position-fixed m-2"
                style={{ zIndex: 1050 }}
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? "✖" : "☰"}
            </button>

            {/* Sidebar */}
            <div
                className={`sidebar d-flex flex-column bg-light text-dark p-3 shadow-lg ${showSidebar ? "show" : "hide"
                    }`}
            >
                <h2 className="text-center mb-4 border-bottom pb-2 fw-bold text-uppercase">
                    <img
                        src="https://react-demo.tailadmin.com/images/logo/logo.svg"
                        alt="Logo"
                        className="img-fluid"
                        width="140"
                    />
                </h2>

                <nav>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item mb-2">
                            <Link
                                to="/"
                                className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                            >
                                ⌘  Dashboard
                            </Link>
                        </li>

                        {/* E-commerce dropdown */}
                        <li className="nav-item mb-2">
                            <button
                                className="btn w-100 text-start text-dark d-flex justify-content-between align-items-center"
                                onClick={() => setOpenEcommerce(!openEcommerce)}
                            >
                                <span>🛒 E-Commerce</span>
                                <span>{openEcommerce ? "▾" : "▸"}</span>
                            </button>

                            {openEcommerce && (
                                <ul className="nav flex-column ms-3 mt-2">
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/products"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/addproducts"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Add Products
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/billing"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Billing
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/invoice"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Invoice
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/singleinvoice"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Single Invoice
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/createinvoice"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Create Invoice
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/transactions"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Transactions
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link
                                            to="/singletransactions"
                                            className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                                        >
                                            Single Transactions
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item mb-2">
                            <Link
                                to="/form"
                                className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                            >
                                🧾  Form
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link
                                to="/userprofile"
                                className="nav-link text-dark d-flex align-items-center gap-2 fs-8"
                            >
                                👤  User Profile
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default SideBar;
