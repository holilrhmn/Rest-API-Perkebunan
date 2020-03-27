import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import editKebun from "./components/editKebun";
import ListKebun from "./components/ListKebun";
import createKebun from "./components/createKebun";
import Navbar from "./components/Navbar";

function App() {
  return (<Router>
    <div className="App">
      <Navbar/>
    
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={createKebun} />
                <Route path="/create-kebun" component={createKebun} />
                <Route path="/edit-kebun/:id" component={editKebun} />
                <Route path="/list-kebun" component={ListKebun} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;