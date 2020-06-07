import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./CreateUser";
import Users from "./Users";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';



function App() {
  
  return (
    <Router>
      <div>
        <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      
    <Navbar.Brand href="/">
      <img
        alt=""
        src="data:image/png;base64,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"
        width="30"
        height="30"
        className="d-inline-block align-top"
        
      />{' '}
      UYI APP
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/CreateUser">Create User</Nav.Link>
      <Nav.Link href="/Users">Users</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>

  <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateUser} />
              <Route path="/createUser" component={CreateUser} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </div>
      </div>
      </div> 
    </Router>
  );
}

export default App;
