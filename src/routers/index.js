import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Containers from "containers";

const { _LoginPage, _PageNotFound, _TablePage } = Containers;

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={_LoginPage} />
      <Route exact path="/table" component={_TablePage} />
      <Route exact path="/404" component={_PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
