import React, { Component } from 'react';
import '../App.css';
import Logo from "./Images/avidity.png";


class Introduction extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
<div className="introSection">
   <img id="logo-intro" src={Logo} alt="Avidity-logo"/>
</div>
)}
}

export default Introduction;
