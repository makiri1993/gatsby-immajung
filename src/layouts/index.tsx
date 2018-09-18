import * as React from 'react'
import styled from 'react-emotion'
import Footer from '../components/footer/Footer'
import '../styles/normalize'
import './style.css'
import Header from '../components/header/Header'

const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <>
    <MainContainer>
      <Header />
      {children()}
    </MainContainer>
    <Footer />
  </>
)
export default TemplateWrapper

const MainContainer = styled('div')`
  height: 100%;
  width: 100%;
`
