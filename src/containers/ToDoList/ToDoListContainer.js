import React, { Component } from "react";

export const ToDoListContainer = (props) => {
  return (
    <div className="container">
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="container d-flex justify-content-center">
            <div class="col-lg-12">
              <div class="card px-3">
                <div class="card-body">{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoListContainer;
