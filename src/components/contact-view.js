import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "../actions/contacts";

const ViewContact = (props) => {
  let [name, setName] = useState(""),
    [email, setEmail] = useState("");

  useEffect(() => {
    getContactInfo();
  }, []);

  const getContactInfo = () => {
    props.Contacts.Contacts.filter((info) => {
      if (info.id == props.match.params.id) {
        setName(info.Name);
        setEmail(info.Email);
      }
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h5 class="card-title">Contact Info.</h5>

              <h6>Name:{name}</h6>
              <h6>Email:{email}</h6>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ViewContact)
);
