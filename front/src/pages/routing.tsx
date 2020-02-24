import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateComponent from "./create";
import Page404 from "./404";
import ArticlesList from "./articles-list";
import ArticlePage from "./article";

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
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
