import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className={props.classContainer}>
      <Link to={props.href} className={props.classLink}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
