import React from "react";

// reactstrap components
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

import "./userPageStyle.css";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import cookie from "react-cookies";
import axios from "axios";

import UserInfo from "./UserInfo.jsx"

function User() {
  const userInfo = {
    fristName: "John",
    lastName: "Smith",
    userImage: "smho0607.jpg",
    userName: "smho0607",
    introduce:
      "I major in data science and I have 3 years of programming experience, and now I’m doing an internship at Google.",
    email: "smho0607@uni.sydney.edu.au",
    address: "KingStreet 206, Newtown, Sydney, NSW",
    postalCode: "20209",
    country: "Japan",
    major: "Master of Data Science",
  };
  
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <UserInfo />
      </div>
    </>
  );
}

export default User;
