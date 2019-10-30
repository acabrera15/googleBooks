import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import SearchPage from "./components/SearchPage/SearchPage";
import Saved from "./components/Saved/Saved";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: true,
      savedBooks: []
    };
  }

  //function will allow the pages to be toggled when the pages are clicked
  HeaderSelected = e => {
    if (e.target.text === "Search") {
      this.setState({ searchActive: true });
    } else {
      this.setState({ searchActive: false });
    }
  };

  saveBook = id => {
    console.log(id)
    const oldBooks = this.state.savedBooks;
    oldBooks.push(id)
    this.setState({savedBooks: oldBooks})
    console.log(this.state.savedBooks)
  }

  render() {
    return (
      <div id="container">
        <Nav buttonPressed={this.HeaderSelected} />
        <Header />
        {this.state.searchActive ? (
          <SearchPage saveClicked={this.saveBook}/>
        ) : (
          <Saved savedBooks={this.state.savedBooks} />
        )}
      </div>
    );
  }
}

export default App;
