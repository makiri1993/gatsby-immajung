import * as React from 'react'
import styled from 'react-emotion'
import '../styles/normalize'

const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <MainContainer>
    {children()}
  </MainContainer>
)
export default TemplateWrapper

const MainContainer = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
`
