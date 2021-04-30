import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Users from "./components/Users";
import Hellooo from "./components/Hellooo";
import Todo from './components/Todo'
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Container >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Hellooo} />
          <Route path="/users" component={Users}/>
          <Route path="/todo" component={Todo}/>
          <Route path="/login" component={Login}/>

        </Switch>
      </Router>
      </Container>
    );
  }
}

export default App;
