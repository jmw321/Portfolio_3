import React, { Component } from 'react';
import '../App.css';


class MenuNavigation extends Component {
  constructor(props) {
    super(props);
}
  render() {

    return (


<nav  className="menuNav">
  <ul id={this.props.menuClass} className="menuList">
    <li className="menuListItem" id="0" onClick={this.props.aboutMeRef}> ABOUT </li>
    <li className="menuListItem" id="1" onClick={this.props.projectRef}> PROJECTS </li>
    <li className="menuListItem" id="2" onClick={this.props.contactMeRef}> CONTACT </li>
  </ul>
</nav>
)}
}

export default MenuNavigation
