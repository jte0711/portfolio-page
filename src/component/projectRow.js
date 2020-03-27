import React from 'react';
import Button from './button.js';
import './css/ProjectRow.css';

function ProjectRow(props){

  let [projectImg, setProjectImg] = React.useState('');

  React.useEffect(()=>{
    // if(props.projectLink){
    //   // Get the JSON image then set projectImg
    //   fetch("https://shielded-stream-67064.herokuapp.com/" + props.projectLink)
    //   .then((res)=>{
    //     return res.json(); 
    //   })
    //   .then((res)=>{
    //     console.log("this is res = ", res);
    //   });
    //   setProjectImg("https://codepen.io/jte0711/pen/ZEGLRLB");
    // }
    setProjectImg("https://codepen.io/jte0711/pen/ZEGLRLB");

  },[]);

  return(
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
    </div>
  );
}


export default ProjectRow;
