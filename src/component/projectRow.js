import React, { useState, useEffect } from 'react';
import Button from './button.js';
import './css/ProjectRow.css';

function ProjectRow(props){

  const [screenWidth, setScreenWidth] = useState(1000);
  const [result, setResult] = useState(<h1>Test</h1>);

  useEffect(()=>{

    const resize = () =>{
      let curWidth = window.innerWidth;
      if (curWidth !== screenWidth) {
        setScreenWidth(curWidth);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    return ()=>{
      window.removeEventListener("resize", resize);
    };
  },[screenWidth]);

  useEffect(()=>{

    const checkGitHub = () =>{
      if (props.github){
        return (<Button addClass={"btnMargin smallBtn"} addLink={props.github} buttonName={"GitHub"}/>);
      }
    };

    let isMobile = (screenWidth <= 500); //426

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
  },[screenWidth, props.github, props.projectDtls, props.imgSrc, props.projectStack, props.projectLink]);

  return result;
}


export default ProjectRow;
