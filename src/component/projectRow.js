import React, { useState, useEffect } from 'react';
import Button from './button.js';
import './css/ProjectRow.css';

function ProjectRow(props){

  const [projectImg, setProjectImg] = useState('');
  const [screenWidth, setScreenWidth] = useState(1000);
  const [result, setResult] = useState(<h1>Test</h1>);

  const resize = () =>{
    let curWidth = window.innerWidth;
    if (curWidth !== screenWidth) {
      setScreenWidth(curWidth);
    }
  };

  const checkGitHub = () =>{
    if (props.github){
      return (<Button addClass={"btnMargin smallBtn"} addLink={props.github} buttonName={"GitHub"}/>);
    }
  };

  useEffect(()=>{
    window.addEventListener("resize", resize);
    resize();
    // Deal with this below after finishing everything else
    setProjectImg("https://codepen.io/jte0711/pen/ZEGLRLB");
    // ----------------------------------------------------
  },[]);

  useEffect(()=>{

    let isMobile = (screenWidth <= 400);

    if (isMobile !== true){
      setResult(
      <div className="projectRow">
        <div className="prImage">
          <img src={props.imgSrc} alt="page preview"/>
        </div>
        <div className="prDescDiv">
          <p className="mLeft prDesc">{props.projectDtls}</p>
          <p className="mLeft"><b>Stack: </b>{props.projectStack}</p>
          <div className="mLeft d-flex">
            <Button addClass={"noMargin smallBtn"} addLink={props.projectLink} buttonName={"Visit"}/>
            {checkGitHub(isMobile)}
          </div>
        </div>
      </div>);
    }else{
      setResult(
        <div className="projectRow">
          <div className="prImage">
            <img src={props.imgSrc} alt="page preview"/>
          </div>
          <p className="prDesc">{props.projectDtls}</p>
          <p className="stackDesc"><b>Stack: </b>{props.projectStack}</p>
          <div className="d-flex">
            <Button addClass={"smallBtn"} addLink={props.projectLink} buttonName={"Visit"}/>
            {checkGitHub(isMobile)}
          </div>
        </div>
      );

    }
  },[screenWidth]);

  return result;
}


export default ProjectRow;
