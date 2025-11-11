import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => setIsOpen(!isOpen);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      {/* Search bar */}
      <div className="flex-grow-1">
        <div className="input-group" style={{ maxWidth: "500px", gap: "10px" }}>
          <span className="input-group-text bg-white border-end-2">🔍</span>
          <input
            type="text"
            className="form-control border-start-2"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Profile section */}
      <div className="profile-container d-flex align-items-center gap-2 ms-3 position-relative" ref={popupRef}>
        <img
          src="public/Img/IMG_20220224_123836_029.jpg"
          alt="User"
          className="rounded-circle border profile-img"
          width="40"
          height="40"
          onClick={togglePopup}
          style={{ cursor: "pointer" }}
        />
        <span className="fw-semibold text-dark">Priyank</span>

        {isOpen && (
          <div
            className="profile-popup shadow-sm border bg-white rounded"
            style={{
              position: "absolute",
              top: "50px",
              right: "0",
              width: "150px",
              zIndex: 2000,
            }}
          >
            <ul className="list-unstyled mb-0">
              <li className="px-3 py-2 hover-bg">
                <Link
                  to="/userprofile"
                  className="text-dark text-decoration-none d-block"
                  onClick={() => setIsOpen(false)} // closes popup after click
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default TopBar;
