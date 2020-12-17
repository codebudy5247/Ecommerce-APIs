import React from "react";
import { Container, Row,Col, Grid } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Eshopping</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
