import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
  font-weight: 400;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: white;
  font-size: 16px;
  font-family: Roboto;
  transition: color 0.3s;

  :hover {
    color: tomato;
  }
 
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="лого" />
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <img src={signImg} alt="войти" />
      <p>войти</p>
    </Login>
  </NavBarStyled>
);