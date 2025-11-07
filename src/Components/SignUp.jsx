import React from "react";
import { useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookForm/resolvers/yup";

let renderCount = 0;

let scheama = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Fullname"),
  email: Yup.string()
    .required("Email is Required")
    .matches(/^[a-z0-9]+@[a-z]{3,5}\.[a-z]{2,4}$/, "Enter Your valid Email here!"),
  age: Yup.number()
    .integer()
    .positive()
    .required("Enter Your Age")
    .min(18, "Enter Age between 18 to 30")
    .max(30, "Enter Age between 18 to 30"),
  Password: Yup.string().required("Password is the required "),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Password must match")
    .required("Confirm Password is Required"),
});
const SignUp = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };
  renderCount++;



  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheama),
  });

  console.log(errors);

  let handleData = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center" variant="h6">
        {" "}
        Create Account-{renderCount}{" "}
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        {...register("Password")}
        error={!!errors.Password}
        helperText={errors.Password?.message}
      />
      <TextField
        label="confirmpassword"
        {...register("confirmpassword")}
        error={!!errors.confirmpassword}
        helperText={errors.confirmpassword?.message}
      />
      <Button variant="contained" type="submit">
        SignUp
      </Button>
    </Paper>
  );
};
export default SignUp;
