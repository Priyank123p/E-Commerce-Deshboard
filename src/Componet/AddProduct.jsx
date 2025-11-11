import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-4 addproduct-heading">
        <h3>Add Product</h3>
        <Link to="/" className="route-home">
          <button className="btn home-btn">Home</button>
        </Link>
      </div>

      {/* Product Description */}
      <div className="card shadow-sm border-0 rounded-4 mb-4">
        <div className="card-headre bg-white">
          <h5 className="mb-0 fw-semibold">Products Description</h5>
        </div>
        <div className="card-body mt-3">
          <form className="row g-4">
            {/* Product Name */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
              />
            </div>

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Category</label>
              <select className="form-select">
                <option>Select a Category</option>
                <option>Laptop</option>
                <option>Phone</option>
                <option>Watch</option>
                <option>Electronics</option>
                <option>Accessories</option>
              </select>
            </div>

            {/* Brand */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Brand</label>
              <select className="form-select">
                <option>Select a Brand</option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Vivo</option>
                <option>Goggle Pixcel</option>
                <option>LG</option>
              </select>
            </div>

            {/* Color */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Color</label>
              <select className="form-select">
                <option>Select a Color</option>
                <option>Silver</option>
                <option>Black</option>
                <option>White</option>
                <option>Gray</option>
                <option>Orange</option>
              </select>
            </div>

            {/* Description */}
            <div className="col-12">
              <label className="form-label fw-semibold">Description</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write product description..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>

      {/* Pricing & Availability */}
      <div className="card shadow-sm border-0 rounded-4 mb-4">
        <div className="card-header bg-white border-bottom">
          <h5 className="mb-0 fw-semibold">Pricing & Availability</h5>
        </div>
        <div className="card-body">
          <div className="row g-4">
            {/* Weight */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Weight (KG)</label>
              <input type="text" className="form-control" placeholder="15" />
            </div>

            {/* Length */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Length (CM)</label>
              <input type="text" className="form-control" placeholder="120" />
            </div>

            {/* Width */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Width (CM)</label>
              <input type="text" className="form-control" placeholder="23" />
            </div>

            {/* Stock Quantity & Availability */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Stock Quantity</label>
              <div className="input-group">
                <button className="btn btn-outline-secondary" type="button">
                  −
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value="1"
                  readOnly
                />
                <button className="btn btn-outline-secondary" type="button">
                  +
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Availability Status</label>
              <select className="form-select">
                <option>Select a Availability</option>
                <option>In Stock</option>
                <option>Out of Stock</option>
                <option>Pre-order</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="card shadow-sm border-0 rounded-4 mb-4">
        <div className="card-header bg-white border-bottom">
          <h5 className="mb-0 fw-semibold">Products Images</h5>
        </div>
        <div className="card-body">
          <div className="border border-2 border-dashed text-center py-5 rounded-4">
            <div className="mb-2">
              <i className="bi bi-upload fs-1 text-secondary"></i>
            </div>
            <p className="mb-1">
              <strong>Click to upload</strong> or drag and drop SVG, PNG, JPG or
              GIF (MAX. 800x400px)
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-end">
        <button className="btn btn-outline-secondary me-2 px-4">Draft</button>
        <button className="btn btn-primary px-4">Publish Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
