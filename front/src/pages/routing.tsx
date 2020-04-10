import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateComponent from "./create";
import Page404 from "./404";
import ArticlesList from "./articles-list";
import ArticlePage from "./article";
import Register from './register';
import Login from './login';

export default function() {
  return (
    <Switch>
      <Route path="/create">
        <CreateComponent />
      </Route>
      <Route exact path="/">
        <ArticlesList />
      </Route>
      <Route path="/article/:id">
        <ArticlePage />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
