import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import Body from "./Body/Body";

const layout = (props) => (
  <Aux>
    <NavBar />
    <Body>
      <main>{props.children}</main>
    </Body>
  </Aux>
);

export default layout;
