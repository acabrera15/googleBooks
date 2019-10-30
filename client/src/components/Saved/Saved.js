import React from "react";
import axios from "axios";
import SavedItem from "../savedItem/savedItem";

export default class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksReady: false,
      booksSaved: []
    };
  }

  componentDidMount() {
    this.props.savedBooks.map(bookId => {
      axios
        .get("https://www.googleapis.com/books/v1/volumes/" + bookId)
        .then(res => {
          const tempBooks = this.state.booksSaved;
          tempBooks.push(res.data);
          this.setState({
            booksSaved: tempBooks
          });
        })
        .catch(err => {
          if (err) throw err;
        });
    });
    this.setState({
      booksReady: true
    });
  }

  getBookInformation = id => {
    return axios
      .get("https://www.googleapis.com/books/v1/volumes/" + id)
      .then(res => {
        console.log(res);
        return <p key={res.data.id}>{res.data.volumeInfo.title}</p>;
      })
      .catch(err => {
        if (err) throw err;
      });
  };

  render() {
    return (
      <>
        {this.state.booksReady
          ? this.state.booksSaved.map(book => {
            alert(JSON.stringify(book))
              return <SavedItem volume={book}></SavedItem>;
            })
          : console.log("books not ready")}
      </>
    );
  }
}
