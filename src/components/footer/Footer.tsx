import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'
import FooterNav from './FooterNav'
import FooterSlogan from './FooterSlogan'
import FooterSocialMedia from './FooterSocialMedia'

interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return(
      <FooterContainer>
        <FooterNav />
        <FooterSlogan />
        <FooterSocialMedia />
      </FooterContainer>
    )
  }
}

const FooterContainer = styled('div')`
  margin-top: ${margins.medium}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.black};
  bottom: 0;
  height: 300px;
  color: white;
  width: 100%;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
