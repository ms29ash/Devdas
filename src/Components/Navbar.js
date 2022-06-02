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
background-color:#000000cb;
display:flex;
font-weight:bold;
padding:20px 0px;
justify-content:space-between;
/* position: sticky;
top:0; */
z-index:100;
`;

const Img = Styled.img`
width:100px;
position: absolute;
top:2px;
left:5vw;
z-index: 50;
`;
const NavLinks = Styled.ul`
color:white;
display: flex;
width:60vw;
margin-left:40vw;
justify-content: space-around;
align-items: center;
`;

const NavLink = Styled.li`
list-style:none;
cursor: pointer;
&:hover{
    color:#fff100;
}
`;

const Button = Styled(NavLink)`
color:black;
background-color:#fff100;
padding:5px 10px ;

border-radius:9000px;
&:hover{
  color:black;
   cursor:pointer;
}
`;
