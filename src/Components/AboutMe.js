import React, { Component } from 'react';
import '../App.css';
import {aboutMeText} from "./Constants.js";


class AboutMe extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (


<div className="aboutMeSection" ref={this.props.refProp}>
  <h1 className="aboutHeader"> About </h1>
    <div> {aboutMeText}
    </div>
</div>
)}
}

export default AboutMe;
