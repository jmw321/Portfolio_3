import React, { Component } from 'react';
import './App.css';


class Project extends Component {
  render() {
    return (
      <div className="project" onClick={this.props.toggleProject} show={this.props.show} id={this.props.id}>
        {this.props.show === true?  <div id={this.props.id} className="projectDescription"> {this.props.summary} </div>
          :<img src={this.props.image} alt="project" id={this.props.id}/>}
     </div>
    )
  }
}
  export default Project;
