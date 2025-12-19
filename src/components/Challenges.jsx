import "./Challenges.css";

import React from "react";

const Challenges = () => {
  return (
    <div class="dashboard-section">
      {/* <!-- Daily Challenges --> */}
      <div class="dashboard-box">
        <div class="dashboard-title">Daily Challenges</div>
        <div class="challenge-item">Play with a new opponent (50 XP)</div>
        <div class="challenge-item active-challenge">
          Win without dice (100 XP)
        </div>
        <div class="challenge-item">Play with only 6 moves (200 XP)</div>
      </div>

      {/* <!-- Player Score --> */}
      <div class="dashboard-box">
        <div class="dashboard-title">Player Score</div>
        <ul class="score-list">
          <li>🥇 Player 1</li>
          <li>🥈 Player 2</li>
          <li>🥉 Player 3</li>
          <li>⭐ Player 4</li>
          <li>⭐ Player 5</li>
        </ul>
        <button class="dashboard-button">View your score</button>
      </div>

      {/* <!-- Player Stats --> */}
      <div class="dashboard-box">
        <div class="dashboard-title">Player Stats</div>
        <ul class="stats-list">
          <li>324 Members</li>
          <li>144 Games</li>
          <li>33 Forums</li>
        </ul>
        <button class="dashboard-button">View all</button>
      </div>

      {/* <!-- Correspondence Games --> */}
      <div class="dashboard-box">
        <div class="dashboard-title">Correspondence Games</div>
        <button class="dashboard-button">View my correspondence games</button>
      </div>
    </div>
  );
};

export default Challenges;
