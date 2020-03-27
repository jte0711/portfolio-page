import React from 'react';
import logo from './logo.svg';
import Button from './component/button.js';
import ProjectRow from './component/projectRow.js';
import ContactCard from './component/contactcard.js';
import './App.css';

function App(){
  return(
    <div className="app">
      <nav className="navBar">
        <a className="brandLogo">James.</a>
        <div className="">
          <a className="navLink">Portfolio</a>
          <a className="navLink">Contact</a>
        </div>
      </nav>
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
      <div className="portfolioBg">
        <div className="portfolioBox">
          <h2>My Portfolio</h2>
          <ProjectRow projectLink="https://codepen.io/jte0711/pen/ZEGLRLB"/>
          <ProjectRow/>
          <ProjectRow/>
          <ProjectRow/>
          <ProjectRow/>
        </div>
      </div>
      <div className="contactSection">
        <ContactCard/>
      </div>
      <div className="footerSection">
        <span className="footerText">Made by me</span>
      </div>
    </div>
    
  );
}

export default App;
