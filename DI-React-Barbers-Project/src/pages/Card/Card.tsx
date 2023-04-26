import React, { useState } from "react";
import profile from "../../components/StyledMUI/Profile";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ barber }) {
  return (
    <>
      <Link
        to={`/profile/${barber.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card" key={barber.id}>
          <h2>
            {" "}
            {barber.firstName} {barber.lastName}{" "}
          </h2>
          <div className="rate">
            <h4>rate: {barber.rating} </h4>
            <h4>price: {barber.price}$ </h4>
          </div>

          <p> {barber.description}</p>
        </div>
      </Link>
    </>
  );
}
