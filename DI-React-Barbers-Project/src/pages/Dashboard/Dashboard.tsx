import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Card from "../Card";

const Dashboard = () => {
  const [data, setData] = useState<BarberItem[]>([
    {
      id: "",
      firstName: "",
      lastName: "",
      rating: 0,
      review: [{ author: "", score: 0, comment: "" }],
      description: "",
      price: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <div className="all">
      <h1>Barbers</h1>
      <div className="page">
        {data.map((barber) => {
          return <Card barber={barber} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
