import React, { Component } from "react";

export default class Modal extends Component {
  componentWillUpdate() {
    console.log("[Modal] Will Update");
  }
  shouldComponentUpdate() {}

  render() {
    return (
      <div
        id={this.props.modalId}
        class={this.props.show ? "modal fade show" : "modal fade"}
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3>{this.props.headerText}</h3>
              <button
                type="button"
                class="close font-weight-light"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div class="modal-body">{this.props.children}</div>
            <div class="modal-footer">
              <button class="btn" data-dismiss="modal" aria-hidden="true">
                {this.props.closeButtonText}
              </button>
              <button class="btn btn-primary">
                {this.props.successButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
