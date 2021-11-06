import React, { Component } from 'react'
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

export default class Login extends Component {
    render() {
        return (
            <div>
                ACCOUNT:<Input placeholder="Account"></Input>
                PASSWORD:<Input type="password"></Input>
                <Button>Log in</Button>
            </div>
        )
    }
}
