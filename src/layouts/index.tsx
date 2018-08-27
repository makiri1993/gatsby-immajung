import * as React from 'react';
import Logo from '../components/logo/Logo';
import '../styles/reset.css';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Title from '../components/title/title';
import styled from 'react-emotion';


const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <MainContainer>
    <MainDivLeft>
      <Logo />
      <Navigation />
      <Footer />
      <Title title="Why we used Gatsby?!"/>
    </MainDivLeft>
    <MainDivRight>
      {children()}
    </MainDivRight>
  </MainContainer>
);
export default TemplateWrapper;

const MainContainer = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`
const MainDivLeft = styled('div')`
  width: 50%;
`

const MainDivRight = styled('div')`
  width: 50%;
`


