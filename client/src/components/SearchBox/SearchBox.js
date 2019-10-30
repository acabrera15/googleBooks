import React from "react";
import { Row, Col, Card, TextInput, Button, Icon } from "react-materialize";

class SeachBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
  }

  requestBooks = () => {
    const bookName = this.state.textInput;
    this.props.requestBooks(bookName);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div id="container">
        <Row>
          <Col m={12} s={12}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Book Search"
            >
              <Row>
                <p>Enter a book you would like to search</p>
                <TextInput
                  placeholder="Book"
                  value={this.state.textInput}
                  id="bookInput"
                  onChange={this.handleChange("textInput")}
                />
                <Button
                  type="submit"
                  waves="light"
                  onClick={() => this.requestBooks()}
                >
                  Submit
                  <Icon right>send</Icon>
                </Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SeachBox;
