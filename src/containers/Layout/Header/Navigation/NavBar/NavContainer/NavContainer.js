import React from "react";

function NavContainer(props) {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
          {props.children}
        </div>
      </div>
    </nav>
  );
}

export default NavContainer;
