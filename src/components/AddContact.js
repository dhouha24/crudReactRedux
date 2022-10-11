import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddContact = () => {
  //get Value form reducers
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && contact
    );

    if (!email || !name || !number) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already Exists!");
    }

    if (checkNumber) {
      return toast.error("This Number phone already Exists!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    console.log(data);

    //add Contact
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added successfully :) ");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center ">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group m-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone number"
                className="form-control"
              />
            </div>
            <div className="form-group m-2">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block  btn-dark"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
