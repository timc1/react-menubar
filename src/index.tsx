import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Router>
          <Header />
          <Switch>
            <Route path="/about">about</Route>
            <Route path="/">home</Route>
          </Switch>
        </Router>
      </Content>
    </>
  );
};

const Content = styled.div`
  padding: calc(var(--unit) * 3);
`;

ReactDOM.render(<Index />, document.getElementById("app"));
