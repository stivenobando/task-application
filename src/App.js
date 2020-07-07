import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Layout from "./containers/Layout/Layout";
import ToDoListBuilder from "./containers/Builder/ToDoListBuilder";
import PrincipalLogin from "./components/Login/Principal/PrincipalLogin";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={PrincipalLogin} />
          <Route path="/to-do-list" component={ToDoListBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
