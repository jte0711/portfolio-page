import React from 'react';
import Button from './component/button.js';
import ProjectRow from './component/projectRow.js';
import ContactCard from './component/contactcard.js';
import NavBar from './component/navbar.js';
import './App.css';

import {landingPageDtl, landingPageStack, todoDtl, todoStack, previewerDtl, previewerStack, quoteDtl, quoteStack} from './component/projectData.js';

function App(){
  return(
    <div className="app">
      <NavBar/>
      <div className="bannerPage">
        <div className="bannerBody">
          <span>Hi there, I'm James</span>
          <h1>a <strong>Software Developer</strong></h1>
          <p>I design and build websites and applications , but the most important I solve problems</p>
          <div className="buttonGroup">
            <Button buttonId="projectButton" buttonName={"My Portfolio"}/>
            <Button buttonId="contactButton" buttonName={"Contact"}/>
          </div>
        </div>
      </div>
      <div id="portfolio" className="portfolioBg">
        <div className="portfolioBox">
          <h2>My Portfolio</h2>
          <ProjectRow imgSrc={process.env.PUBLIC_URL + "images/landingpage.png"} projectDtls={landingPageDtl} projectStack={landingPageStack} github={"https://github.com/jte0711/simple-landing-page"} projectLink="https://landing-page-95.herokuapp.com/"/>
          <ProjectRow imgSrc={process.env.PUBLIC_URL + "images/todolist.png"} projectDtls={todoDtl} projectStack={todoStack} github={"https://github.com/jte0711/todolist"} projectLink="https://todolist-frontend123.herokuapp.com/"/>
          <ProjectRow imgSrc={process.env.PUBLIC_URL + "images/previewer.png"} projectDtls={previewerDtl} projectStack={previewerStack} projectLink="https://codepen.io/jte0711/pen/ZEGLRLB"/>
          <ProjectRow imgSrc={process.env.PUBLIC_URL + "images/quotegenerator.png"} projectDtls={quoteDtl} projectStack={quoteStack} projectLink="https://codepen.io/jte0711/pen/vYOXorz"/>
        </div>
      </div>
      <div id="contact" className="contactSection">
        <p className="contactText">Reach me here</p>
        <ContactCard/>
      </div>
      <div className="footerSection">
        <span className="footerText">Made by me</span>
      </div>
    </div>
    
  );
}

export default App;
