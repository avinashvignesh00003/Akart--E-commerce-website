import React from "react";
import Swal from "sweetalert2";
import { useState, usessEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Products from "./Products";
import { OrbitProgress } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux"
import {addItem} from "../store/cartSlice"

const ProductList = () => {
  let navigate = useNavigate();

  // let[products,setProducts]=useState([])
  // let[error,Seterror]=useState(" ");
  // let[isLoading,setIsLoading]=useState(true);

  // useEffect(()=>{
  // fetch("http://localhost:4000/products", {method: "GET"})
  // .then((response)=>{
  //     if(response.ok){
  // return (response.json())
  //     }
  //   else{
  //     throw new Error("Serach proper data")
  //   }

  // })
  // .then((data)=>{
  //   console.log(data);

  //   setProducts(data);
  // })
  // .catch((error)=>{
  //   Seterror(error.message);
  // })

  // .finally(()=>{
  //   setIsLoading(false)
  // })

  // }
  // ,[] )

  let { products, error, isLoading, setProducts } = useFetch(
    "http://localhost:5000/products"
  );

 let handleDelete=(id)=>{
  console.log(id)
  axios.delete(`http://localhost:5000/products/${id}`)
  .then(()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        let newProductList=products.filter(product=>product.id!==id)
    setProducts(newProductList);
     }});
  })
 }

let dispatch=useDispatch();

let cartState=useSelector((state)=>{
return state.cart
})

let addItemtoCart = (Product) => {

let checkProduct=cartState.some(cartProduct=>cartProduct.id===Product.id)



if(!checkProduct){
dispatch(addItem(Product));
     Swal.fire({
       title: "Success",
       text: "Product added sucessfully",
       icon: "success",
     });
}
else{
Swal.fire({
  title: "oops!😒😒",
  text: "user your already added product",
  icon: "error",
  footer:"<p>Add some other product</p>"
});
}
};



  if (isLoading) {
    return (
      <div>
   <center>
          <OrbitProgress
            variant="spokes"
            color="#cc3131"
            size="medium"
            text="please wait"
            textColor="#12151a"
          />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <article>
          <span>To Create New Product</span>
          <Button onClick={() => navigate("/NewProduct")}>Click Me!</Button>
        </article>
        <h1>Products List</h1>

        <section className="products ">
          {products.map((Product) => (
            <Card className="product" key={Product.id}>
              <center>
                <Card.Img
                  variant="top"
                  src={Product.image}
                  style={{ width: "9rem", height: "12rem" }}
                />
              </center>
              <Card.Body>
                <Card.Title>{Product.title} </Card.Title>
                {/* <Card.Text  >
      {Product.description}
        </Card.Text> */}

                <Card.Text>${Product.price}</Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="primary"
                  onClick={() => addItemtoCart(Product)}
                >
                  <MdAddShoppingCart />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate(`/UpdateProduct/${Product.id}`);
                  }}
                >
                  <FaUserEdit />
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(Product.id)}
                >
                  <MdDelete />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>

        {error && <p>{error}</p>}
      </div>
    );
  }
};
export default ProductList;
