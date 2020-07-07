import React, { Component } from "react";
import ToDoListItem from "./ToDoListItem";
import { withRouter } from "react-router-dom";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      checkedItems: new Map(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState({
      checkedItems: this.state.checkedItems.set(item, isChecked),
    });
    const v = 0;
  }

  handleChecked(data) {}

  render() {
    const itemsToDo = this.props.data.map((item, i) => {
      return (
        <ToDoListItem
          id={i}
          name={i.toString()}
          classToggle={
            this.state.checkedItems.get(i.toString()) ? "completed" : ""
          }
          title={item.title}
          handleChange={this.handleChange}
          checked={this.state.checkedItems.get(i.toString())}
        />
      );
    });

    return (
      <div class="list-wrapper">
        <ul class="d-flex flex-column-reverse todo-list">{itemsToDo}</ul>
      </div>
    );
  }
}

export default withRouter(ToDoList);
