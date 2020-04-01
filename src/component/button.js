import React from 'react';
import './css/Button.css';

function Button(props){

  const [classes, setClasses] = React.useState('btn btn-primary');

  const handleClick = ()=>{
    if(props.addHref){
      window.location.href = props.addHref;
    } else {
      window.open(props.addLink, "_blank");
    }
  };


  React.useEffect(()=>{
    if(props.addClass){
      setClasses(classes.concat(' ',props.addClass));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.addClass]);
  
  return(
    <div id={props.buttonId} className={"button"}>
      <button onClick={handleClick} type="button" className={classes}>{props.buttonName}</button>
    </div>
  );
}


export default Button;
