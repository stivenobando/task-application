import * as actionTypes from "./actions";
import data from "../data/data";

const initialState = {
  toDoList: data.toDoList,
  isEnabled: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK_TO_DO:
      const newItem = {
        title: action.title,
        checked: false,
      };
      const actualData = [...state.toDoList];
      actualData.push(newItem);
      return {
        ...state,
        toDoList: [...actualData],
      };

    default:
      return state;
  }
};

export default reducer;
