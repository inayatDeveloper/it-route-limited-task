import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../store";
import ContactList from "../components/contact-list";
import AddnewContact from "../components/add-new-contact";
import EditContact from "../components/edit-contact";
import ContactView from "../components/contact-view";
const Routes = (props) => {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ContactList} />} />
          <Route path="/add" component={AddnewContact} />
          <Route path="/edit/:id" component={EditContact} />
          <Route path="/details/:id" component={ContactView} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
