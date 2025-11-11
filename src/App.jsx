import React from "react";
import TodoApp from "./Components/TodoApp";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import NewProduct from "./Components/NewProduct";
import UpdateProduct from "./Components/UpdateProduct";
import WishList from "./Components/WishList";
import Dashboard from "./Components/Dashboard";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// localStorage.setItem(
//   "cart",  JSON.stringify([
//   {id:1}
//   ])
// )

// let dataman= JSON.parse (localStorage.getItem("cart"))
// console.log(dataman)

// localStorage.removeItem("cart")

function App() {
  // let user = "Avinash";

  const isLoggedIn = localStorage.getItem("logged") === "yes";

  return (
    <div className="app">
      {/* <Router> */}
      {window.location.pathname !== "/" && <NavBar />}

      {/*       
      window.location.pathname !== "/login/Aj" && */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />

        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/home" element={isLoggedIn ? <Home /> : <Login />} /> */}
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path="list" element={<ProductList />} />
          <Route path="details" element={<ProductDetails />} />
        </Route>

        <Route path="/login/:user" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}
export default App;
