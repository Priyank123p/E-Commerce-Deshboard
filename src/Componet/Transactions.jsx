import React from 'react'
import "./Transactions.css"
import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa';

const orders = [
  { id: "#323537", name: "Abram Schleifer", email: "abram@example.com", amount: "$43,999", date: "25 Apr, 2027", status: "Completed" },
  { id: "#323544", name: "Ava Smith", email: "ava.smith@example.com", amount: "$1,200", date: "01 Dec, 2027", status: "Pending" },
  { id: "#323538", name: "Carla George", email: "carla65@example.com", amount: "$919", date: "11 May, 2027", status: "Completed" },
  { id: "#323543", name: "Ekstrom Bothman", email: "ekstrom@example.com", amount: "$679", date: "15 Nov, 2027", status: "Completed" },
  { id: "#323552", name: "Ella Davis", email: "ella.davis@example.com", amount: "$210", date: "01 Mar, 2028", status: "Failed" },
  { id: "#323539", name: "Emery Culhane", email: "emery09@example.com", amount: "$839", date: "29 Jun, 2027", status: "Completed" },
  { id: "#323547", name: "Ethan Patel", email: "ethan.patel@example.com", amount: "$2,100", date: "05 Jan, 2028", status: "Pending" },
  { id: "#323553", name: "James Martinez", email: "james.martinez@example.com", amount: "$3,300", date: "15 Mar, 2028", status: "Completed" },
];

const Transactions = () => {
  return (
    <>
      <div className="container Transactions-page">
        <div className="d-flex justify-content-between align-items-center Transactions-heading">
          <h2>Transactions</h2>
          <Link to="/" className="route-home">
            <button className="btn home-btn">Home</button>
          </Link>
        </div>

        <div className='Transactions-table shadow-sm rounded-4 p-4 mt-4'>
          <div className='Transactions-table-heading d-flex justify-content-between'>
            <div>
              <h2>Transactions</h2>
              <p>Your most recent transactions list</p>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <div className="position-relative">
                  <i
                    className="fa fa-search position-absolute text-secondary"
                    style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}
                  ></i>
                  <input
                    type="text"
                    className="form-control ps-5 rounded-pill"
                    placeholder="Search..."
                    style={{ minWidth: "220px" }}
                  />
                </div>

                <div className="dropdown">
                  <select className="form-select">
                    <option value="5">Last 7 days</option>
                    <option value="10">Last 10 days</option>
                    <option value="20">Last 15 days</option>
                    <option value="15">Last 30 days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="Transactions-table-data">
            <table className="order-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Total Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="order-id">{order.id}</td>
                    <td className="customer-name">{order.name}</td>
                    <td>{order.email}</td>
                    <td className="amount">{order.amount}</td>
                    <td>{order.date}</td>
                    <td>
                      <span className={`status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <FaEllipsisV className="menu-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transactions