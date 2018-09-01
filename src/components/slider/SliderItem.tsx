import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../../styles/variables'

interface SliderItemProps{}

interface SliderItemState{}

export default class Slider extends React.Component<SliderItemProps, SliderItemState>{
  constructor(props: SliderItemProps) {
    super(props)
    this.state = { }
  }

  public render() {
    return(
			<SliderItem>
				<h1>{Math.random()}</h1>
			</SliderItem>
    )
  }
}

const SliderItem = styled('div')`
	background-color: green;
	margin-top: 50px;
	color: white;
	height: 80vh;
	width: 80vw;
	margin-left: 20px;
`
