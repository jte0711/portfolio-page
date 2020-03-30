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

  useEffect(()=>{
    window.addEventListener("resize", resize);
    resize();
    // Deal with this below after finishing everything else
    setProjectImg("https://codepen.io/jte0711/pen/ZEGLRLB");
    // ----------------------------------------------------
  },[]);

  useEffect(()=>{
    let isMobile = (screenWidth <= 720);

    if (isMobile !== true){
      setResult(
      <div className="projectRow">
        <div className="prImage">
          <img alt="Project Preview" src={projectImg}/>
        </div>
        <div className="prDescDiv">
          <p className="mLeft prDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit arcu et vulputate commodo.
          Nam in aliquam neque. Phasellus a tristique tellus, quis euismod velit.</p>
          <p className="mLeft">Stacks: NextJs, ReactJs, etc</p>
          <div className="mLeft d-flex">
            <Button addClass={"noMargin smallBtn"} buttonName={"Visit"}/>
            <Button addClass={"btnMargin smallBtn"} buttonName={"GitHub"}/>
          </div>
        </div>
      </div>);
    }else{
      setResult(
        <div className="projectRow">
          <div className="prImage">
            <img alt="Project Preview" src={projectImg}/>
          </div>
          <p className="prDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit arcu et vulputate commodo.
          Nam in aliquam neque. Phasellus a tristique tellus, quis euismod velit.</p>
          <p className="stackDesc">Stacks: NextJs, ReactJs, etc</p>
          <div className="d-flex">
            <Button buttonName={"Visit"}/>
            <Button buttonName={"GitHub"}/>
          </div>
        </div>
      );

    }
  },[screenWidth]);

  return result;
}


export default ProjectRow;
