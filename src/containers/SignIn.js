import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Input from "../components/UI/Input";

function SignIn(props) {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email address"
                placeholder="Enter email"
                type="email"
                error="We'll never share your email with anyone else."
              ></Input>
              <Input
                label="Password"
                placeholder="Enter Password"
                type="Password"
              ></Input>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SignIn;
