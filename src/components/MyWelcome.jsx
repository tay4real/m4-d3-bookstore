import React, { Component } from "react";

import { Container, Jumbotron} from "react-bootstrap";

class MyWelcome extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Welcome To Gliztsint Online Bookstore</h1>
          <p>
              The best books you can find online!
          </p>
          
        </Jumbotron>
      </Container>
    );
  }
}

export default MyWelcome;
