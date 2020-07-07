import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios";
import ToDoList from "../../components/ToDoList/List/ToDoList";
import ToDoAddItem from "../../components/ToDoList/Add/ToDoAddItem";
import ToDoListContainer from "../ToDoList/ToDoListContainer";

import "./ToDoListBuilder.css";
import * as actionTypes from "../../store/actions";

export class ToDoListBuilder extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  componentDidMount() {
    axios.get("/api/todo/").then((res) => {
      this.setState({ data: res.data });
    });
  }

  state = {
    data: [],
  };

  render() {
    return (
      <ToDoListContainer>
        <ToDoAddItem handleClickAdd={this.props.onListToDoAdded} />
        <ToDoList data={this.props.toDoList} />
      </ToDoListContainer>
    );
  }

  handleClickAdd(evt, val) {
    console.log(this.props);
    const newItem = {
      title: val,
      checked: false,
    };
    const actualData = this.state.data;
    actualData.push(newItem);

    this.setState({
      data: actualData,
    });

    var d = "";
  }
}

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onListToDoAdded: (taskTitle) =>
      dispatch({ type: actionTypes.ADD_TASK_TO_DO, title: taskTitle }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListBuilder);
