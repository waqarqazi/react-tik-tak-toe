// src/components/Statistics.js
import React from "react";
import "./Statistics.css";

function Statistics({ wins, losses, draws }) {
  return (
    <div className="statistics">
      <h2>Player Statistics</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{wins}</span>
          <span className="stat-label">Wins</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{losses}</span>
          <span className="stat-label">Losses</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{draws}</span>
          <span className="stat-label">Draws</span>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
