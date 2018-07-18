import React from 'react';
import Styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <StyledNavbar>
        <StyledLogo>
          <a href="/">
            <h1>immajung</h1>
          </a>
          <p>BERLIN BASED BRAND</p>
          <StyledNavItems />
        </StyledLogo>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = Styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
const StyledLogo = Styled.div`
  margin-left: 50px;
  h1 {
    font-size: 40px;
    letter-spacing: 6px;
    text-align: center;
  }

  p {
    text-align: center;
    margin-top: -13%;
  }

  @media (max-width: 416px) {
    h1 {
      font-size: 1.7em;
    }

    p {
    font-size: 1em;
    }

    .nav-items {
      font-size: 15px;
    }
  }

  @media (max-width: 322px) {
    margin-left: 20px;

    h1 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.8em;
    }

    .nav-items {
      font-size: 13px;
    }
  }
`;
const StyledNavbar = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center; /* Align Items Vertically */
  justify-content: space-between; /* Align Items Horizontally (with equal space in between each of them */
  
  ul {
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
`;

const StyledNavItems = Styled.div`
  font-size: 30px;
  @media (max-width: 1024px) {
    padding-right: 30px;
  }

  @media (max-width: 416px) {
    font-size: 15px;
  } 

  @media (max-width: 322px) {
    font-size: 13px;
  }
`;
