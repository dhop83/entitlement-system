import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerProfile from "./components/CustomerProfile";
import EntitlementManager from "./components/EntitlementManager";
import RevenueAnalysis from "./components/RevenueAnalysis";
import RealTimeCharts from "./components/RealTimeCharts";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/entitlements">Entitlements</Link> |{" "}
        <Link to="/revenue">Revenue</Link> |{" "}
        <Link to="/charts">Charts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:customerId" element={<CustomerProfile />} />
        <Route path="/entitlements" element={<EntitlementManager />} />
        <Route path="/revenue" element={<RevenueAnalysis />} />
        <Route path="/charts" element={<RealTimeCharts />} />
      </Routes>
    </div>
  );
}
