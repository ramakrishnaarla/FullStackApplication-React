import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    phoneno: "",
  });

  const { name, username, phoneno } = user;
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {


      await axios.post("http://localhost:8090/user", user);
      
      navigate("/");
    } catch (error) {
      
      if (error.response) {


        setError(error.response.data); // Set error message from API response
      } else {
        

        console.error('Error occurred:', error.message);
      }


    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Patient Form</h2>
          {error && <p style={{color:"red"}}>{error}</p>}

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                id="validationCustom03" required
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label" >
                Username
              </label>
              <input
                type={"text"}
                id="validationCustom03" required
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Phone Number
              </label>
              <input
                type={"tel"}
                id="validationCustom03" required
                className="form-control"
                placeholder="Enter your phoneno"
                name="phoneno"
                value={phoneno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}