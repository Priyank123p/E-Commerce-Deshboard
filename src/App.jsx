import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DeshBoard from "./Componet/DeshBoard";
import SideBar from "./Componet/SideBar";
import AddProduct from "./Componet/AddProduct";
import Products from "./Componet/Products";
import Billing from "./Componet/Billing";
import Invoice from "./Componet/Invoice";
import SingleInvoice from "./Componet/SingleInvoice";
import CreateInvoice from "./Componet/CreateInvoice";
import SingleTransactions from "./Componet/SingleTransactions";
import Transactions from "./Componet/Transactions";
import TopBar from "./Componet/TopBar";
import Form from "./Componet/Form";
import UserProfile from "./Componet/UserProfile";
import EditProfile from "./Componet/EditProfile";

const App = () => {
  return (
    <div className="app-layout">

      <aside className="sidebar">
        <SideBar />
      </aside>

      <main className="main-content">

        <header className="topbar">
          <TopBar />
        </header>

        <section className="page-content">
          <Routes>
            <Route path="/" element={<DeshBoard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproducts" element={<AddProduct />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/singleinvoice" element={<SingleInvoice />} />
            <Route path="/createinvoice" element={<CreateInvoice />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/singletransactions" element={<SingleTransactions />} />
            <Route path="/form" element={<Form />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
