import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CustomerProfile() {
  const { customerId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://entitlement-backend.onrender.com/health`)
      .then((res) => setData(res.data))
      .catch(console.error);
  }, [customerId]);

  return (
    <div>
      <h2>Customer Profile - {customerId}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
