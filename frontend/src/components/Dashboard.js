import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/entitlements">Entitlement Manager</Link></li>
        <li><Link to="/profile/1234">Customer Profile</Link></li>
        <li><Link to="/revenue">Revenue Analysis</Link></li>
        <li><Link to="/charts">Real-Time Charts</Link></li>
      </ul>
    </div>
  );
}
