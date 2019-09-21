import React, { Component } from 'react';
import '../App.css';
import MenuNavigation from './MenuNavigation.js';


class Header extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (

<header className="App-header" >
  <div className="mobileNavigation" > <i class="fas fa-bars fa-2x" onClick={this.props.navigationToggle}  ></i> </div>
  <MenuNavigation
    menuClass={this.props.menuClass}
    aboutMeRef={this.props.aboutMeRef}
    contactMeRef={this.props.contactMeRef}
    projectRef={this.props.projectRef}
    />
</header>
)}
}

export default Header;
