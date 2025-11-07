import React from 'react'
import {Button,Grid,TextField,Paper, Typography} from "@mui/material";
import { useState } from 'react';


const NewProduct=()=>{
    let paperStyle={
        width:400,
        margin:"20px auto",
        padding :"20px"
    }












// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },


let [newproduct,setNewProduct]=useState({

     title: "",
    price: 500,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate:0 ,
      count: 0
    },
});

const handleChange=(e)=>{
const{value,name}=e.target




// console.log(fieldName)
if(name.includes("rating.") ){
const fieldName=name.split("rating.")[1];
setNewProduct({
    ...newproduct,
    rating :{
        ...newproduct.rating,
        [fieldName]:value,
    },
});
}
else{
setNewProduct({
    ...newproduct,
    [name]:value
})
}
}


let handleAdd=(e)=>{
e.preventDefault();


fetch( "http://localhost:5000/products", {
   method:"POST" ,
   headers:{
"Content-Type":"application/json"
   },
   body:JSON.stringify(newproduct)
})
.then(()=>{
    alert(" Data alert sucessfully")
    setNewProduct({
         title: "",
    price: 500,
    description: "hello siri",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate:"",
      count: 0
    },
    })
})
}


// console.log( newproduct);




    return(
        <>
        <Paper elevation={20} style={paperStyle}>
            <Typography variant='h5'>
                Create New Product
            </Typography>
            <Grid component="form" style={{display:"grid",gap:"20px"}} onSubmit={handleAdd}  >
               <TextField 
               value={newproduct.title}
                name="title"
                 label="Title" 
                 variant="outlined"
                   fullWidth
                   onChange={handleChange}
               />
                <TextField 
                value={newproduct.category}
                 name='category'
                  label="category" 
                  variant="outlined"
                   fullWidth 
                  onChange={handleChange}/>

      <Grid container spacing={2}>
        <Grid item xs={6}>
  <TextField 
  name='rating.rate'
   value={newproduct.rating.rate} 
   label="Rate" 
     type="number"
      variant="outlined" 
    
      onChange={handleChange}
     />
        </Grid>
        <Grid item xs={6}>
  <TextField 
  name='rating.count'
   value={newproduct.rating.count}
    label="Count"   
    type="number"
     variant="outlined" 
      onChange={handleChange}/>

        </Grid>
        </Grid>     
          <Button type="submit" variant="contained" fullWidth>Add</Button>
            </Grid>
        </Paper>
        </>
    )
}
export default NewProduct