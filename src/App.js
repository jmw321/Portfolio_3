import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import AboutMe from './Components/AboutMe.js';
import Introduction from './Components/Introduction.js';
import ProjectSection from './Components/ProjectSection.js';
import Contact from './Components/Contact.js';
import {projects} from "./Components/Constants.js";


var menuClass = "menuNavListHide";


class App extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = React.createRef();
    this.scrollDivProj = React.createRef();
    this.scrollDivContact = React.createRef();
    this.state = {menuClass, projects}
}
  render() {

    var toggleProject = (event) => {
       var newProjects = [...this.state.projects];
       newProjects.map(item => Number(item.id) === Number(event.target.id) &&
        item.show === false?
        item.show = true
        : item.show = false)
       this.setState({projects:newProjects})
   }

   var navigationToggle = (event) => {
     this.state.menuClass === "menuNavList" ?
     this.setState({menuClass: "menuNavListHide"})
     : this.setState({menuClass: "menuNavList"})
   }

    return (
      <div className="App">
        <Header navigationToggle={navigationToggle}
        aboutMeRef={() => {
        this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' }); }}

        contactMeRef={() => {
        this.scrollDivContact.current.scrollIntoView({ behavior: 'smooth' }); }}

        projectRef={() => {
        this.scrollDivProj.current.scrollIntoView({ behavior: 'smooth' }); }}

        menuClass={this.state.menuClass}/>
        <main className="mainContent">
          <Introduction/>
          <AboutMe refProp={this.scrollDiv}/>
          <ProjectSection projects={this.state.projects} toggleProject={toggleProject} refProp={this.scrollDivProj}/>
          <Contact refProp={this.scrollDivContact}/>
        </main>
      </div>
    );
  }
}

export default App;
