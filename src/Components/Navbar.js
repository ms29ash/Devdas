import React from "react";
import Styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <Img src="images/logo.png" alt="" />
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Gallery</NavLink>
        <Button>Find a Store</Button>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;

const Nav = Styled.nav`
background-color:${(p) => p.theme.color.black};
display:flex;
font-weight:bold;
justify-content:space-between;
z-index:100;
`;

const Img = Styled.img`
width:150px;
z-index: 50;
margin-left:3vw;
`;
const NavLinks = Styled.div`
color:white;
display: flex;
margin-left:40vw;
justify-content: space-around;
align-items: center;
`;

const NavLink = Styled.div`
cursor: pointer;
margin:0 2rem;
`;

const Button = Styled(NavLink)`
color:black;
background-color:${(p) => p.theme.color.yellow};
border-radius:3px;
padding:0.75rem;
margin-right:3rem;
`;
