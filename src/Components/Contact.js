import React, { Component } from 'react';
import '../App.css';


class Contact extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (

<div className="contactMeSection" ref={this.props.refProp}>
<h1 className="contactHeader"> Contact </h1>
    <div> <i class="far fa-envelope fa-2x"></i> <p> Email Me @ jenna.wills321@gmail.com</p> </div>
    <div> <i class="fab fa-linkedin fa-2x"></i> <p> Connect with me on <a href="https://www.linkedin.com/in/jenna-p-785034104"> LinkedIn! </a> </p> </div>
</div>

)}
}

export default Contact;
