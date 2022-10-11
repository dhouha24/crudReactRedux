import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center ">Edit Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-dark"
              />
              <Link to="/" className="btn btn-dark mr-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
