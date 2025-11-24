import React from "react";
import "./DeshBoard.css";

const DeshBoard = () => {
  const percentage = 65.80;

  return (
    <>
      <div className="dashboard-container">
        {/* Cards */}
        <div className="card-grid">
          <div className="card-item">
            <p>Customers</p>
            <h2>3,782</h2>
            <span className="growth positive">↑ 11.01%</span>
          </div>

          <div className="card-item">
            <p>Orders</p>
            <h2>5,359</h2>
            <span className="growth negative">↓ 9.05%</span>
          </div>

          <div className="card-monthly target-card">
            <h3>Monthly Target</h3>
            <p className="text-muted small">Target you’ve set for each month</p>

            <div
              className="circle"
              style={{
                background: `conic-gradient(#4c6ef5 ${percentage * 3.6}deg, #edf2f7 ${percentage * 3.6}deg)`,
              }}
            >
              <div className="inner-circle">
                <h4>{percentage}%</h4>
                <span className="badge bg-success">+10%</span>
              </div>
            </div>

            <p className="small">
              You earn <strong>$3287</strong> today, it's higher than last month.
              <br /> Keep up your good work!
            </p>

            <div className="target-stats">
              <div>
                <p>Target</p>
                <h6 className="text-danger">$20K ↓</h6>
              </div>
              <div>
                <p>Revenue</p>
                <h6 className="text-success">$20K ↑</h6>
              </div>
              <div>
                <p>Today</p>
                <h6 className="text-success">$20K ↑</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeshBoard;
