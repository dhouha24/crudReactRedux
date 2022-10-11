import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !number) {
      return toast.warning("Please fill in all fields!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    console.log(data);

    //upadte  Contact
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student updated successfully :) ");
  };

  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 text-center ">Edit Contact {id}</h1>
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
                  value="Update Student"
                  className="btn btn-dark me-3"
                  onClick={handleSubmit}
                />
                <Link to="/" className="btn btn-danger ">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="display-3 text-center ">
          Student contact with id {id} not exist
        </h1>
      )}
    </div>
  );
};

export default EditContact;
