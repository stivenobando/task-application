import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../../Helper/Checkbox";

export default function ToDoListItem(props) {
  return (
    <li class={props.classToggle} id={props.id}>
      <div class="form-check">
        {" "}
        <label class="form-check-label">
          <Checkbox
            name={props.name}
            onChange={props.handleChange}
            checked={props.checked}
          />
          {props.title}
          <i class="input-helper"></i>
        </label>
      </div>{" "}
      <FontAwesomeIcon className="remove" icon={faTimes} />
    </li>
  );
}
