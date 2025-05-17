import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function RealTimeCharts() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://entitlement-backend.onrender.com/health")
        .then((res) => {
          setMetrics((m) => [...m, { time: new Date().toLocaleTimeString(), status: res.data.status }]);
        })
        .catch(console.error);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={metrics}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="status" />
      </LineChart>
    </ResponsiveContainer>
  );
}
