import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Paper, Typography, Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Profil.css";
import Comment from "../../Comments";
type value = {
  comment: string;
};

function profile() {
  const [barber, setBarber] = useState<BarberItem>({});
  const [value, setValue] = useState<value>({ comment: "" });

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/data.json`);
      const json = await response.json();
      const barber = json.find((barber: BarberItem) => barber.id === id);
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
      <Comment />
      <div>
        <h3>reviews:</h3>
        {barber.review?.map((review) => {
          return (
            <Grid className="review">
              <Paper>
                <Typography margin={5}>
                  {review.author}:"{review.comment} "
                </Typography>
                <Typography>rate: {review.score}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default profile;
