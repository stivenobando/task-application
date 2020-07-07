import React, { Component } from "react";

export class ToDoAddItem extends Component {
  state = {
    titleItem: "",
  };

  handleInputChange = (e) => {
    this.setState({ titleItem: e.target.value });
  };

  clearInputText = () => {
    this.setState({ titleItem: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h4 class="card-title">Awesome Todo list</h4>
        <div class="add-items d-flex">
          {" "}
          <input
            type="text"
            class="form-control todo-list-input"
            placeholder="What do you need to do today?"
            onChange={this.handleInputChange}
            value={this.state.titleItem}
          />{" "}
          <button
            class="add btn btn-primary font-weight-bold todo-list-add-btn"
            onClick={(evt) => {
              this.props.handleClickAdd(this.state.titleItem);
              this.clearInputText();
            }}
          >
            Add
          </button>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoAddItem;
