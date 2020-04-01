import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './css/navbar.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
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

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };

    let isMobile = (screenWidth <= 720);

    if (isMobile !== true){
      setResult(<nav className="navBar">
      <span className="brandLogo">James.</span>
      <div className="">
        <a className="navLink" href="#portfolio">Portfolio</a>
        <a className="navLink" href="#contact">Contact</a>
      </div>
    </nav>);
    }else{
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