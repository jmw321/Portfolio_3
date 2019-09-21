import React, { Component } from 'react';
import '../App.css';
import Project from './Project.js';

class ProjectSection extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (

<div className="projectSection" ref={this.props.refProp}>
<h1 className="projectHeader"> Projects </h1>
    {this.props.projects.map(item =>
      <Project
      image={item.image}
      id={item.id}
      show={item.show}
      link={item.link}
      summary={item.description}
      toggleProject={this.props.toggleProject} />)}
</div>
)}
}

export default ProjectSection;
