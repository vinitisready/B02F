import React from "react";
import "../Statistics/Statistics.css";

const Statistics = () => {
  return (
    <div className="header-stats">
      <h2>700+ students saved, and counting</h2>
      <p>
        50k new study notes added every day, from the world's most active
        student communities
      </p>
      <div className="stats">
        <div className="stat-item">
          <h3>350+</h3>
          <div className="stat-item-bottom">
            <img
              src="stats_book.png"
              alt="Study resources"
              className="stat-icon"
            />
            <p>Study resources</p>
          </div>
        </div>
        <div className="stat-item">
          <h3>115+</h3>
          <div className="stat-item-bottom">
            <img
              src="stats_insti.png"
              alt="Institutions"
              className="stat-icon"
            />
            <p>Institutions</p>
          </div>
        </div>
        <div className="stat-item">
          <h3>700+</h3>
          <div className="stat-item-bottom">
            <img src="stats_std.png" alt="Users" className="stat-icon" />
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;