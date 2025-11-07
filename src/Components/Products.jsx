import React from 'react'
// import {useState,useEffect} from "react";
import {Outlet} from "react-router-dom";
// import Button from 'react-bootstrap/Button';

const Products = () => {

// let[count,setCount]=useState(0);
// let[count1,setCount1]=useState(0);

//   useEffect(()=>{
// console.log("this effect should done");
//   }  )  

// //   console.log("initial Render");

//   useEffect(()=>{
// console.log("this effect has only initial render");
//   } ,[] )  



//   useEffect(()=>{
// console.log("this effect will run only dependency change");
//   },[count] )  
  
//   useEffect(()=>{
// console.log("this effect will run only dependency change"+ count1 );
//   } ,[count1] )  

// console.log("initail render")

  return (
    <div>
      {/* <h1>
        product-{count}-{count1}
        </h1>  */}
          {/* <Button variant="primary" onClick={()=>setCount(count+1)}>Increase</Button>
                    <Button variant="primary" onClick={()=>setCount1(count1+1)}>Increase</Button>
      <Link to="details">Details</Link>
      <Link to="list">List</Link> */}
       <Outlet/>
    </div>
  )
}

export default Products