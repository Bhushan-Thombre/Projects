// Here <a> tag is used instead of <Link> tag due to styling issues but <Link> tag should be used because using <a> tag whenever we
// click the link the page will load and using <Link> tag single page application is implemented

import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center" style={{ color: '#ffffff' }}>
              eDukan
            </h4>
            <p>
              eDukan is a dummy e-commerce website created using the MERN stack.
              The website contains many functionalities such as user
              login/registration, cart and wishlist management, third party api
              integration for payments, etc. Check it out!
            </p>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center" style={{ color: '#ffffff' }}>
              Quick Links
            </h4>
            <div className="text-center my-3">
              <a href="/" style={{ color: '#ffffff' }}>
                Home
              </a>
            </div>
            <div className="text-center my-3">
              <a href="/cart" style={{ color: '#ffffff' }}>
                Cart
              </a>
            </div>
            <div className="text-center my-3">
              <a href="/login" style={{ color: '#ffffff' }}>
                Login
              </a>
            </div>
            <div className="text-center my-3">
              <a href="/register" style={{ color: '#ffffff' }}>
                Register
              </a>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center" style={{ color: '#ffffff' }}>
              Open Source
            </h4>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ background: '#152336' }}>
                <div>We are now open-sourced. Contribute and earn rewards!</div>
              </ListGroup.Item>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Bhushan-Thombre/E-Dukan"
                target="_blank"
              >
                <Button
                  style={{ background: 'orange' }}
                  className="btn btn-block rounded"
                >
                  Contribute on GitHub
                </Button>
              </a>
            </ListGroup>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center" style={{ color: '#ffffff' }}>
              Contact
            </h4>
            <div className="text-center my-3">
              <i className="fa-solid fa-location-dot fa-lg mx-2"></i>
              123, Demo street, Demo road, Demo city, Demo state, India, 431002
            </div>
            <div className="text-center my-3">
              <i className="fa-solid fa-phone mx-2"></i>+91 1234567890
            </div>
            <div className="text-center my-3">
              <i className="fa-solid fa-envelope mx-2"></i>
              bhushanthombre2001@gmail.com
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className="text-center py-3" md={8}>
            Copyright &copy; 2022. All Rights Reserved by eDukan
          </Col>
          <Col className="text-center py-3" md={4}>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bhushan-thombre-209910207/"
              target="_blank"
              style={{ color: '#ffffff' }}
            >
              <i className="fa-brands fa-linkedin fa-lg mx-2"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/bhushanat11"
              target="_blank"
              style={{ color: '#ffffff' }}
            >
              <i className="fa-brands fa-twitter fa-lg mx-2"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/Bhushan-Thombre"
              target="_blank"
              style={{ color: '#ffffff' }}
            >
              <i className="fa-brands fa-github fa-lg mx-2"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/_tbhushan._/"
              target="_blank"
              style={{ color: '#ffffff' }}
            >
              <i className="fa-brands fa-instagram fa-lg mx-2"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
