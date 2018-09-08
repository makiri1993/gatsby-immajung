import * as React from 'react'
import styled from 'react-emotion'
import { margins } from '../../styles/variables';

interface IFooterSloganProps {}

export default class FooterSlogan extends React.Component<IFooterSloganProps> {
  constructor(props: IFooterSloganProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return(
      <FooterSloganContainer>
        <FooterSloganH1>immajung</FooterSloganH1>
      </FooterSloganContainer>
    )
  }
}

const FooterSloganContainer = styled('div')`
  grid-area: center;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
`

const FooterSloganH1 = styled('h1')`
`
