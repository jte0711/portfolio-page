import React from 'react';
import './css/Button.css';

function Button(props){

  let [classes, setClasses] = React.useState('btn btn-primary');

  React.useEffect(()=>{
    if(props.addClass){
      setClasses(classes.concat(' ',props.addClass));
    }
  },[]);
  
  return(
    <div id={props.buttonId} className={"button"}>
      {/* <button type="button" className="btn btn-primary">{props.buttonName}</button> */}
      <button type="button" className={classes}>{props.buttonName}</button>
    </div>
  );
}


export default Button;
