import React, { Component } from 'react';

import Task from "./Images/Taskboard.jpg";
import Uv from "./Images/uvtracknew.jpg";
import Hoa from "./Images/hoa.jpg";
import Dinner from "./Images/Dinner.jpg";


export const projects = [
  {id: 0, name: "UV Index App", image:Uv, show:false, description: "A single page React web application. Utilizes MySQL, Node.js and Express for the location database. UV data sourced with API provided by OpenUV to fetch realtime UV data. Check it out here! ", link: "https://happy-gates-4d1a86.netlify.com/"},
  {id: 1, name: "Dinner App", image:Dinner, show:false, description: "A single page React web application to solve the always elusive what's for dinner question by selecting random recipes. Not happy with the selection? Click the randomized button until decided. This application is ready to be integrated with recipe APIs for a wider selection. Feeling hungry now? Find your next meal now, ", link: "https://friendly-morse-450054.netlify.com"},
  {id: 2, name: "Task Board", show:false, image:Task, description: "One of my first applications, a simple task board based on a Kanban board. Create a new card, add or remove a task item. Try it out, ",  link: "https://admiring-ptolemy-013d93.netlify.com/"},
  {id: 3, name: "HOA", image:Hoa,show:false, description: "Built using React, this is a sample site for a community homeowner association. Uses routing to navigate to additional site pages."}
];


export var aboutMeText = "Inspired by design with a passion for technology, I look forward to bringing ideas to applications! I started my coding journey learning database reporting, design and administration. I enjoy full stack development where I can create APIs to better serve applications. My latest projects have also included creating custom designs using Inkscape.";
