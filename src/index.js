import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import StudentLayout from "layouts/Student.js";
import DiscussionContent from "views/DiscussionBoard/DiscussionContent";

import NotFound from "views/NotFound/NotFound.jsx"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      <Route path="/discussion" component={DiscussionContent} />

      <Route path="/student" render={(props) => <StudentLayout {...props} />} />

      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
