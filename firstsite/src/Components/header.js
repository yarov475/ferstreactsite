import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from './../assets/kite.png'
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormControl  from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import About from '../Pages/About';
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";



export default class Header extends Component {
    render() {

        return (
            <>
            <Navbar   collapseOnselect expand="md" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="/">

                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="logo"
                            />  Mariinskiy CREW
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id ="responsive-navbar-nav">
                      <Nav className="mr-auto" >
                        <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/contacts" >Contacts</Nav.Link>
                          <Nav.Link href="/about" >About Us</Nav.Link>
                         <Nav.Link href="/blog" >Blog</Nav.Link>
                       </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                          <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/blog" component={Blog}/>
                    </Switch>
                </Router>
        </>
        );
    }
}
