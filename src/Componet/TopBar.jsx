import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TopBar = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center bg-white border-bottom px-4 py-2 position-fixed top-0 shadow-sm"
      style={{
        left: "250px",
        width: "calc(100% - 250px)",
        zIndex: 1050,
        height: "64px",
      }}
    >
      <div className="flex-grow-1">
        <div className="input-group" style={{ maxWidth: "500px", gap: "10px" }}>
          <div>
            <span className="input-group-text bg-white border-end-2">
              🔍
            </span>
          </div>
          <input
            type="text"
            className="form-control border-start-2"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* User */}
      <div className="d-flex align-items-center gap-2 ms-3">
        <img
          src="public/Img/IMG_20220224_123836_029.jpg"
          alt="User"
          className="rounded-circle border"
          width="40"
          height="40"
        />
        <span className="fw-semibold text-dark">Priyank</span>
      </div>
    </div>
  );
};

export default TopBar;
