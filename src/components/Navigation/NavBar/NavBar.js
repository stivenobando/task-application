import React, { Component } from "react";
import "./NavBar.css";
import NavItem from "../../../containers/Layout/Header/Navigation/NavBar/NavItem/NavItem";
import Login from "../../Login/NavBarLogin/Login";
import Modal from "../../Helper/Modal";
import NavContainer from "../../../containers/Layout/Header/Navigation/NavBar/NavContainer/NavContainer";
import NavModule from "../../../containers/Layout/Header/Navigation/NavBar/NavContainer/NavModule";

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavContainer>
          <NavModule classNavModule="nav navbar-nav">
            <NavItem href="/" classContainer="nav-item" classLink="nav-link">
              Home
            </NavItem>
            <NavItem
              href="/to-do-list"
              classContainer="nav-item"
              classLink="nav-link"
            >
              To Do List
            </NavItem>
            <NavItem href="#" classContainer="nav-item" classLink="nav-link">
              Register
            </NavItem>
          </NavModule>
          <NavModule classNavModule="nav navbar-nav flex-row justify-content-between ml-auto">
            <NavItem
              href="#"
              classContainer="nav-item order-2 order-md-1"
              classLink="nav-link"
            >
              <i class="fa fa-cog fa-fw fa-lg"></i>
            </NavItem>
            <li class="dropdown order-1">
              <button
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                class="btn btn-outline-secondary dropdown-toggle"
              >
                Login <span class="caret"></span>
              </button>
              <NavModule classNavModule="dropdown-menu dropdown-menu-right mt-2">
                <li class="px-3 py-2 size-login-menu">
                  <Login />
                </li>
              </NavModule>
            </li>
          </NavModule>
        </NavContainer>
        <Modal
          modalId="modalPassword"
          headerText="Forgot password"
          closeButtonText="Close"
          successButtonText="Save changes"
        >
          <p>Reset your password..</p>
        </Modal>
      </React.Fragment>
    );
  }
}
