import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Profil.css";

function profile() {
  const [barber, setBarber] = useState<BarberItem>({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/data.json`);
      const json = await response.json();
      const barber = json.find((barber) => barber.id === id);
      setBarber(barber);
    }

    fetchData();
  }, []);

  return (
    <div className=" barber">
      <Link to="/dashboard"> back</Link>
      <h1>
        {" "}
        {barber.firstName} {barber.lastName}{" "}
      </h1>
      <h2> {barber.description} </h2>
      <div className="about">
        <h2>Score:{barber.rating}</h2>
        <h2>Price: {barber.price}$</h2>
      </div>
      <div>
        <h3>reviews:</h3>
        {barber.review?.map((review) => {
          return (
            <div className="review">
              <p className="comment">
                <span>
                  {review.author}: "{review.comment}"
                </span>
                <span>rate:{review.score} </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default profile;
