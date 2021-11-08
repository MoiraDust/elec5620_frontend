import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import axios from "axios";
import cookie from "react-cookies";

export default class Login extends Component {
  state = {
    acc: null,
    pwd: null,
  };

  showSnackBar = (msg, severity) => {
    this.setState({
      snackbarOpen: true,
      snackbarMsg: msg,
      snackbarSeverity: severity,
    });
  };

  saveAcc = (event) => {
    this.setState({ acc: event.target.value });
  };
  savePwd = (event) => {
    this.setState({ pwd: event.target.value });
  };
  handleInfo = () => {
    console.log(this.state);
    const acc = this.state.acc;
    const pwd = this.state.pwd;
    /*  axios.post("http://localhost:8080/api/user/login", {
            acc: acc,
            pwd: pwd
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          }); */
    if (acc === null || pwd === null) {
      window.alert("Please enter account and password");
    }
    (async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/user/login", {
          acc: acc,
          pwd: pwd,
        });
        if (res.status === 200) {
          const userInfo = res.data;
          for (var i = 0; i < userInfo.length; i++) {
            if (userInfo[i].id === 0) {
              window.alert("Please check your account and password");
            } else {
              console.log("loged user", userInfo[i]);
              this.setState({ logedUser: userInfo[i] });
              cookie.save("account", userInfo[i].accouunt);
              cookie.save("uid", userInfo[i].id);
              cookie.save("firstName", userInfo[i].firstName);
              cookie.save("lastName", userInfo[i].lastName);
              cookie.save("role", userInfo[i].role);
              if (userInfo[i].changPwd === 0) {
                this.props.history.push("/changepassword");
              } else {
                var redirectTo;
                if (userInfo[i].role === 1) redirectTo = "/admin";
                if (userInfo[i].role === 0) redirectTo = "/student";
                this.props.history.push({
                  pathname: redirectTo,
                  userInfo: {
                    userInfo: userInfo[i],
                  },
                });
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  render() {
    return (
      <div>
        ACCOUNT:
        <Input
          placeholder="Account"
          name="uname"
          onChange={this.saveAcc}
        ></Input>
        PASSWORD:
        <Input type="password" name="password" onChange={this.savePwd}></Input>
        <Button onClick={this.handleInfo}>Log in</Button>
      </div>
    );
  }
}
