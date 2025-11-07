import react from "react";
import { Button, Grid, TextField, Paper, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import {useNavigate} from "react-router-dom";


const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  // let [newproduct, setNewProduct] = useState;
  let [UpdateProduct, setUpdateProduct] = useState(null);
 
  

  let {id}= new useParams();
  let navigate=useNavigate();
  

useEffect(()=>{
  axios
    .get(` http://localhost:5000/products/${id}`)
    .then((res) => setUpdateProduct(res.data));
},[])



  
  let handleChange = (e) => {
    const { value, name } = e.target;


    // console.log(fieldName)
    if (name.includes("rating.")) {
      const fieldName = name.split("rating.")[1];
      setUpdateProduct({
        ...UpdateProduct,
        rating: {
          ...UpdateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
     setUpdateProduct({
       ...UpdateProduct,
       [name]: value,
     });
    }
  };

  let handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateProduct),
    }).then(() => {
      alert(" Saved sucessfully");
      navigate("/products");

      setNewProduct({
        title: "",
        price: 500,
        description: "hello siri",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
          rate: "",
          count: 0,
        },
      });
    });
  };





if(UpdateProduct!==null){
  return (
    <>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5"
        textAlign="center">update product siri!😊</Typography>
        <Grid
          component="form"
          style={{ display: "grid", gap: "20px" }}
          onSubmit={handleUpdate}
        >
          <TextField
            value={UpdateProduct.title}
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={UpdateProduct.category}
            name="category"
            label="category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="rating.rate"
                value={UpdateProduct.rating.rate}
                label="Rate"
                type="number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="rating.count"
                value={UpdateProduct.rating.count}
                label="Count"
                type="number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth color="success">
            Save
          </Button>
        </Grid>
      </Paper>
    </>
  );
}
else{
  <div>
    Loading...
  </div>
}
};
export default UpdateProduct;
