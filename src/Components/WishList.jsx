import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../store/cartSlice";

const WishList = () => {
  let cartProducts = useSelector((state) => state.cart);
  console.log(cartProducts);

  let dispatch = useDispatch();
  let handleDelete = (reduxItemId) => {
    dispatch(removeItem(reduxItemId));
  };

  return (
    <>
      {cartProducts.length !== 0 ? (
        <section className="products ">
          {cartProducts.map((Product) => (
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
                  variant="danger"
                  onClick={() => handleDelete(Product.id)}
                >
                  <MdDelete />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      ) : (
        <h1>cart la add pannuga first aprom inga vanga!</h1>
      )}
    </>
  );
};

export default WishList;
