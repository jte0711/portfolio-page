import React from 'react';
import './css/ContactCard.css';

function ContactCard(props){
  return(
    <div className="contactCard">
      <div className="contactMargin contactPic">
        <img alt="Myself" src={process.env.PUBLIC_URL + "./images/mypic.png"}/>
      </div>
      <div className="contactMargin cDetails">
        <p className="cName">James Tedy</p>
        <p className="cEmail">james.tedy@ymail.com</p>
        <div className="contactSocial">
          <a href="https://www.linkedin.com/in/jamestedy/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/jte0711"><i className="fab fa-github logoMargin"></i></a>
          <a href="https://codepen.io/jte0711"><i className="fab fa-codepen"></i></a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;