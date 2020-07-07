import React from "react";

const Login = (props) => {
  return (
    <form class="form" role="form">
      <div class="form-group">
        <input
          id="emailInput"
          placeholder="Email"
          class="form-control form-control-sm"
          type="text"
          required=""
        />
      </div>
      <div class="form-group">
        <input
          id="passwordInput"
          placeholder="Password"
          class="form-control form-control-sm"
          type="text"
          required=""
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          Login
        </button>
      </div>
      <div class="form-group text-center">
        <small>
          <a href="#" data-toggle="modal" data-target="#modalPassword">
            Forgot password?
          </a>
        </small>
      </div>
      <div class="form-group text-center">
        <small>
          <a href="#" data-toggle="modal" data-target="#modalPassword">
            Register
          </a>
        </small>
      </div>
    </form>
  );
};

export default Login;
