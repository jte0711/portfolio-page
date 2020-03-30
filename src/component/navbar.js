import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './css/navbar.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [screenWidth, setScreenWidth] = useState(1000);
  const [result, setResult] = useState(<h1>Test</h1>);

  const toggleNavbar = () => {
    console.log("called");
    setCollapsed(!collapsed);
  };
  
  const resize = () =>{
    let curWidth = window.innerWidth;
    if (curWidth !== screenWidth) {
      setScreenWidth(curWidth);
    }
  };

  useEffect(()=>{
    window.addEventListener("resize", resize);
    resize();
  },[]);

  useEffect(()=>{

    let isMobile = (screenWidth <= 720);

    if (isMobile !== true){
      console.log("not true screen");
      setResult(<nav className="navBar">
      <a className="brandLogo">James.</a>
      <div className="">
        <a className="navLink">Portfolio</a>
        <a className="navLink">Contact</a>
      </div>
    </nav>);
    }else{
      console.log("true screen")
      setResult(
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto brandLogo">James.</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="toggleItems" navbar>
                <NavItem>
                  <NavLink className="" href="/components/">Project</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="" href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  },[screenWidth, collapsed]);

  
  return result;
}

export default NavBar;