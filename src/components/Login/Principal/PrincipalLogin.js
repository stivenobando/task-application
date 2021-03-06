import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./PrincipalLogin.css";

export default class PrincipalLogin extends Component {
  render() {
    return (
      <div className="container-login">
        <div class="d-flex justify-content-center h-100">
          <div class="card-login">
            <div class="card-header">
              <h3>Sign In Please!</h3>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FontAwesomeIcon className="" icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <FontAwesomeIcon className="" icon={faKey} />
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="password"
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
