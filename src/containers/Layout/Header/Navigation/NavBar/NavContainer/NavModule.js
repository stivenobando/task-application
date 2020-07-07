import React from "react";

function NavModule(props) {
  return <ul className={props.classNavModule}>{props.children}</ul>;
}

export default NavModule;
