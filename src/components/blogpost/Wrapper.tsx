import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'

interface WrapperProps {
	blogpostcontent: string
}

export default class Wrapper extends React.Component<WrapperProps>{
  constructor(props: WrapperProps) {
    super(props)
    this.state = { }
	}
	
	public const createMarkup() {
		return {__html: this.props.blogpostcontent }
	}

  public render() {
    return(
			<MainContainer>
				<WrapperContainer dangerouslySetInnerHTML={this.createMarkup()} />
			</MainContainer>
    )
  }
}

const MainContainer = styled('div')`
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 20px;
	@media (min-width: 485px) {
		margin-left: 200px;
		margin-right: 200px;
		margin-top: 20px;  
		}
`

const WrapperContainer = styled('div')`
	width: 100%;
	color: ${colors.black};

	img {
		width:100%;
		height: auto;
	}
`
