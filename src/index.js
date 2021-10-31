import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import DiscussionContent from "views/DiscussionBoard/DiscussionContent";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      <Route path="/discussion" component={DiscussionContent} />

      <Redirect to="/admin/attendance" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
