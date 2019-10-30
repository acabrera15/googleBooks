import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import Axios from "axios";
import BookInformation from "../BookInformation/BookInformation";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booksSet: false
    };
  }
  axiosBookRequest = bookName => {
    this.setState({ booksSet: false });
    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyCWImxMTM8vjEFwzjjDfTH--sXV1Rz96u4`
    )
      .then(response => {
        console.log(response.data.items);
        this.setState({
          books: response.data.items,
          booksSet: true
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <SearchBox requestBooks={this.axiosBookRequest} />
        {this.state.booksSet ? (
          this.state.books.map(book => {
            return <BookInformation saveClicked={this.props.saveClicked} volume={book} />;
          })
        ) : (
          <div></div>
        )}
      </>
    );
  }
}
