import React from 'react';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';



import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';



const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="header-top">
            <Navbar bg="info" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="tour">Tour Package</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link to="/home" className="nav">Home</Link>
                        <Link to="/packages" className="nav">Packages</Link>
                        <Link to="/review" className="nav">Review</Link>
                        <Link to="/about us" className="nav">About Us</Link>

                        <Link to="/login" className="nav">Login</Link>

                        <span className="logout">{user?.displayName} <br /> </span>
                        {user?.email && <Button variant="danger" onClick={logout}>logout</Button>}
                    </Nav>


                </Container>
            </Navbar>
        </div>
    );
};

export default Header;