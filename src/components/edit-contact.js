import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import dateTime from "../utils";
import { mapStateToProps, mapDispatchToProps } from "../actions/contacts";

const EditContact = (props) => {
  let [name, setName] = useState(""),
    [email, setEmail] = useState("");

  useEffect(() => {
    getEditInfo();
  }, []);

  const getEditInfo = () => {
    props.Contacts.Contacts.filter((info) => {
      if (info.id == props.match.params.id) {
        setName(info.Name);
        setEmail(info.Email);
      }
    });
  };

  let saveEditContact = () => {
    props.saveEditContact({
      id: props.match.params.id,
      Name: name,
      Email: email,
      ModifiedDate: dateTime(),
    });
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h5 class="card-title">Edit Contact.</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <button
                className="btn btn-primary"
                onClick={() => saveEditContact()}
              >
                save
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditContact)
);
