import React from 'react';
import { Row, Col, Card, CardTitle, Button } from "react-materialize";


export default class SavedItem extends React.Component {
    constructor(props) {
      super(props);
      const volumeInfo = this.props.volume.volumeInfo;
      this.state = {
        image: volumeInfo.imageLinks.thumbnail,
        title: volumeInfo.title,
        authors: volumeInfo.authors,
        description: volumeInfo.description,
        link: volumeInfo.infoLink,
        id: this.props.volume.id
      };
    }
  
    gatherInformationFromBook = () => {
      this.props.saveClicked(this.state.id);
    }
  
    render() {
      return (
        <Row>
          <Col m={1} />
          <Col m={10} s={12} center-align>
            <Card
              horizontal
              header={<CardTitle image={this.state.image} />}
              actions={[<a />]}
            >
              <Button onClick={this.gatherInformationFromBook}> Save Book</Button>
              <h6>{this.state.title}</h6>
              {this.state.authors.length !== 1 ? (
                <p>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Authors: </span>
                  {this.state.authors.map((author, index) => {
                    if (index === this.state.authors.length - 1) {
                      return author;
                    }
                    return author + ", ";
                  })}
                </p>
              ) : (
                <p>
                  <span style={{ fontWeight: "bold" }}>Author: </span>
                  {this.state.authors[0]}
                </p>
              )}
              <p>{this.state.description}</p>
  
              <a href={this.state.link}>More Information</a>
            </Card>
          </Col>
        </Row>
      );
    }
  }
  