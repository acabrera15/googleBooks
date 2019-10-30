import React from "react";
import { Row, Col, Card } from "react-materialize";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col m={12} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="(React) Google Book Search"
          >
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Header;
