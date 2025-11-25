import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "IPhone 16 pro",
      category: "Phone",
      brand: "Apple",
      price: "$1,100",
      stock: "Out of Stock",
      date: "01 Dec, 2025",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/o/9/-original-imahggev6y5zhbjz.jpeg?q=70",
    },
    {
      id: 2,
      name: "Apple MacBook Pro M3 Max",
      category: "MacBook",
      brand: "Apple",
      price: "$4200",
      stock: "In Stock",
      date: "29 Jun, 2025",
      img: "https://react-demo.tailadmin.com/images/product/product-01.jpg",
    },
    {
      id: 3,
      name: "Apple Watch Ultra",
      category: "Watch",
      brand: "Apple",
      price: "$1,579",
      stock: "Out of Stock",
      date: "13 Mar, 2025",
      img: "https://react-demo.tailadmin.com/images/product/product-02.jpg",
    },
    {
      id: 4,
      name: "Dell XPS 13 Laptop",
      category: "Laptop",
      brand: "Dell",
      price: "$1300",
      stock: "In Stock",
      date: "18 Nov, 2025",
      img: "https://react-demo.tailadmin.com/images/product/product-04.jpg",
    },
    {
      id: 5,
      name: "Airpods Pro 2nd Gen",
      category: "Airpods",
      brand: "Apple",
      price: "$399",
      stock: "In Stock",
      date: "28 Sep, 2025",
      img: "https://react-demo.tailadmin.com/images/product/product-05.jpg",
    },
    {
      id: 6,
      name: "IPhone 16",
      category: "Phone",
      brand: "Apple",
      price: "$899",
      stock: "In Stock",
      date: "18 Aug, 2025",
      img: "https://rukminim1.flixcart.com/image/240/240/xif0q/mobile/o/d/1/-original-imahggetmzzanrty.jpeg?q=60",
    },
    {
      id: 7,
      name: "Google Pixel 10 Pro XL",
      category: "Phone",
      brand: "Google",
      price: "$1,199",
      stock: "In Stock",
      date: "10 Sep, 2025",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/b/s/-original-imahfjsfrg8hhgve.jpeg?q=70",
    },
    {
      id: 8,
      name: "IPhone 17",
      category: "Phone",
      brand: "Apple",
      price: "$899",
      stock: "In Stock",
      date: "02 Sep, 2025",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/t/g/-original-imahft5gqkxzyeqa.jpeg?q=70",
    },
    {
      id: 9,
      name: "IPhone 17 Pro",
      category: "Phone",
      brand: "Apple",
      price: "$1400",
      stock: "In Stock",
      date: "02 Nov, 2025",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/a/-original-imahft5nxmyqndhf.jpeg?q=70",
    },
  ];

  return (
    <div className="container products-card">

      <div className="product-heading">
        <h3>Products List</h3>
         <Link to="/" className="route-home">
            <button className="btn home-btn">Home</button>
          </Link>
      </div>

      <div className="table-card">
        <div className="products-header">
          <div>
            <h5>Products List</h5>
            <p>Track your store’s progress to boost your sales.</p>
          </div>
          <div className="btn-group">
            <div><button className="btn export-btn">Export</button></div>
            <Link to="/addproducts"><button className="btn add-btn">+ Add Product</button></Link>
          </div>
        </div>
        <div className="table-controls">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search..."
          />
        </div>

        <table className="table align-middle mt-3">
          <thead>
            <tr>
              <th></th>
              <th>Products</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="product-cell">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>
                  <span
                    className={
                      item.stock === "In Stock"
                        ? "badge in-stock"
                        : "badge out-stock"
                    }
                  >
                    {item.stock}
                  </span>
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
