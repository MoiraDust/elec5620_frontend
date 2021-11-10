import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import Login from "./components/Login/Login.jsx"

import AdminLayout from "layouts/Admin.js";
import StudentLayout from "layouts/Student.js";
import DiscussionList from "views/DiscussionBoard/DiscussionList"
import DiscussionContent from "views/DiscussionBoard/DiscussionContent";
import ChangePwd from "./components/Login/ChangePwd.jsx"


import NotFound from "views/NotFound/NotFound.jsx"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      {/* Discussion  Board */}
      <Route path="/discussion/course/" component={DiscussionList} />
      <Route path="/discussion/course/:courseId/" component={DiscussionList} />
      <Route path="/topic/" component={DiscussionContent} />
      <Route path="/topic/:topicId/" component={DiscussionContent} />

      <Route path="/student" render={(props) => <StudentLayout {...props} />} />

      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/changepassword" component={ChangePwd} />

      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
