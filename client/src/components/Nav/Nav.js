import React from "react";
import { NavItem, Navbar } from "react-materialize";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
      <Navbar centerLogo alignLinks="left">
          <NavItem href="https://books.google.com/">Google Books</NavItem>
        <NavItem onClick={this.props.buttonPressed} >Search</NavItem>
        <NavItem onClick={this.props.buttonPressed} >Saved</NavItem>
      </Navbar>
      
      </div>
    );
  }
}

export default Nav;
