import React from 'react';
import './css/ContactCard.css';

function ContactCard(props){
  return(
    <div className="contactCard">
      <div className="contactMargin">
        <img alt="Myself" src={process.env.PUBLIC_URL + "/photo.png"}/>
      </div>
      <div className="contactMargin cDetails">
        <p className="cName">Johnny Broui</p>
        <p className="cEmail">johnny.broui934@bromail.com</p>
        <div>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github logoMargin"></i>
          <i className="fab fa-codepen"></i>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;