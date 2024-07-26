import axios from 'axios';
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../Assets/logo1.png";
import Notifications from './Notifications/Notifications';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    async function fetchNotificationsCount() {
      try {
        const response = await axios.get('http://127.0.0.1:8001/contact_form_count/');
        setNotificationsCount(response.data.count);
      } catch (error) {
        console.error('Error fetching notifications count:', error);
      }
    }
    fetchNotificationsCount();
  }, []);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/Reach_me" onClick={() => updateExpanded(false)}>
                <FaEnvelope style={{ marginBottom: "2px" }} /> Reach Me
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link onClick={() => setShowNotifications(!showNotifications)}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <FaBell style={{ marginBottom: "2px" }} />
                  {notificationsCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      padding: '5px 10px',
                      borderRadius: '50%',
                      background: 'red',
                      color: 'white',
                      fontSize: '12px'
                    }}>
                      {notificationsCount}
                    </span>
                  )}
                </div>
              </Nav.Link>
              {showNotifications && (
                <Notifications />
              )}
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
