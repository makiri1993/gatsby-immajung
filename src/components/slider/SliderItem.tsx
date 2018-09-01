import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'
import Title from '../title/Title';

interface SliderItemProps{
  title: string
  cat: string
  imgsrc: string
  imgalt: string
  imgtitle: string
  preText: string
  ling: string
}

interface SliderItemState{}

const img: string = require('../../img/test_bild.jpg') 

export default class Slider extends React.Component<SliderItemProps, SliderItemState>{
  constructor(props: SliderItemProps) {
    super(props)
    this.state = { }
  }

  public render() {
    return(
		<div>
			<SliderItem>
				<Title>Why we used Gatsby?</Title>
				<Cat>Tech</Cat>
				<FeatureImgContainer>
					<FeaturedImg src={img} />
				</FeatureImgContainer>
			</SliderItem>
			<PreTextContainer>
				There are lots of advantages to writing on public platforms like Medium over static site generators. If you write in public platforms, you can write on a laptop, and edit on your phone.
				<br/>
				<ReadMore href="#">Read more..</ReadMore>
			</PreTextContainer>
		</div>
    )
  }
}

const SliderItem = styled('div')`
	margin-top: ${margins.large}px;
	color: white;
	width: 90%;
	max-height: 100vh;
`

const FeatureImgContainer = styled('div')`
	width: 100%;
	max-height: auto;
`

const FeaturedImg = styled('img')`
	max-height: 80vh;
	max-width: 80%;
`

const Title = styled('h1')`
	position: absolute;
	color: ${colors.black};
	background-color: ${colors.white};
	margin-top: -20px;
	display: block;
	width: 200px;
`
const Cat = styled('h2')`
	position: absolute;
	color: ${colors.black};
	background-color: ${colors.white};
	margin-top: 300px;
	margin-left: 50vw;
	display: block;
	width: 100px;
	text-align: center;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const PreTextContainer = styled('div')`
	position: relative;
	font-size: 1.1rem;
	color: ${colors.black};
	width: 90%;
	@media (max-height: 570px) {
  	width: 90%;
  }
`

const ReadMore = styled('a')`
	text-decoration: none;
	color: ${colors.lila};
`
