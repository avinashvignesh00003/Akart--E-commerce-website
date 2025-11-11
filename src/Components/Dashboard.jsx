import react from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Dashboard = () => {
  const [id, setId] = useState("");
  const [password, setpassword] = useState("");
  const [isvalid, setValid] = useState(true);

  let navigate = useNavigate();

  let handlelogin = () => {
    if (id == "admin" && password == "avi1235") {
        localStorage.setItem("logged","yes")
      setValid(true);
      navigate("/home");
    } else {
      setValid(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center   news">
      <div className="p-5  rounded shadow bg-white " style={{ width: "350px" ,
        }}>
        <h4 className="text-center mb-3  why">Sign-in to go AKART WEBSITE🛒</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="enter id"
              className="hello"
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="enter your password"
              className="hello"
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>

          <Button className="w-100" onClick={handlelogin}>
            Login !
          </Button>

          {!isvalid && (
            <p className="text-danger text-center mt-3">
              Enter correct data user😒
            </p>
          )}
        </Form>
      </div>
    </div>
  );
};
export default Dashboard;
