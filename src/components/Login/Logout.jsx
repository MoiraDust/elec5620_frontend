import React, { Component } from 'react'
import cookie from 'react-cookies'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
  } from "reactstrap";

export default class Logout extends Component {

    logout =()=>{
        cookie.remove("account");
        cookie.remove("uid");
        cookie.remove("firstName");
        cookie.remove("lastName");
        cookie.remove("role");
        cookie.remove("address");
        cookie.remove("country");
        cookie.remove("email");
        cookie.remove("gender");
        cookie.remove("intro");
        cookie.remove("major");
        cookie.remove("post");
        window.location.href = '/'
      }

    render() {
        return (
            <div>
                <DropdownMenu right>
                <DropdownItem tag="a" onClick={this.logout}>Log out</DropdownItem>
              </DropdownMenu>
            </div>
        )
    }
}
