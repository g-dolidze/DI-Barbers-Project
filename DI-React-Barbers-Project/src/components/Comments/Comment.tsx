import React from "react";
import { useFormik } from "formik";
import isUserAuth from "./isUserAuth";

export default function Comment() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      comment: "",
      rate: "",
    },
    onSubmit: (values) => {
      isUserAuth;
      alert("done");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="fullName">First Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      <label htmlFor="comment">Last Name</label>
      <input
        id="comment"
        name="comment"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      <label htmlFor="rate">rate Address</label>
      <input
        id="rate"
        name="rate"
        type="rate"
        onChange={formik.handleChange}
        value={formik.values.rate}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
