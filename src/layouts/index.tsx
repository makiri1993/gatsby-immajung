import * as React from 'react'
import styled from 'react-emotion'

import Footer from '../components/footer/Footer'
import Logo from '../components/logo/Logo'
import Navigation from '../components/navigation/Navigation'
import Title from '../components/title/Title'

const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <MainContainer>
    <MainDivLeft>
      <Logo />
      <Navigation />
      <Footer />
      <Title title="Why we used Gatsby?!" />
    </MainDivLeft>
    <MainDivRight>{children()}</MainDivRight>
  </MainContainer>
)
export default TemplateWrapper

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
