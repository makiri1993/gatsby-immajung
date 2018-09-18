import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { colors, margins, dimensions, padding } from '../../styles/variables'

interface SliderItemProps {
  title: string
  cat: string
  imgsrc: string
  imgalt?: string
  imgtitle?: string
  preText: string
  link: string
}

interface SliderItemState {}

export default class Slider extends React.Component<
  SliderItemProps,
  SliderItemState
> {
  constructor(props: SliderItemProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <>
        <SliderItem>
          <Title>{this.props.title}</Title>
          <Cat>{this.props.cat}</Cat>
          <FeatureImgContainer>
            <FeaturedImg
              title="Featured image from the Blogpost"
              alt="Featured image from the Blogpost"
              src={this.props.imgsrc}
            />
          </FeatureImgContainer>
          <PreTextContainer>
            {this.props.preText}
            <br />
            <ReadMore title="Link to the Blogpost" to={this.props.link}>
              Read more..
            </ReadMore>
          </PreTextContainer>
        </SliderItem>
      </>
    )
  }
}

const SliderItem = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: ${margins.md};
  color: ${colors.black};
  position: relative;
`

const FeatureImgContainer = styled('div')``

const FeaturedImg = styled('img')`
  height: ${dimensions.images.mobileBig.height};
  width: ${dimensions.images.mobileBig.width};
`

const Title = styled('h1')`
  font-size: ${dimensions.headingSizes.h1};
  margin-bottom: ${margins.sm};
`
const Cat = styled('h2')`
  position: absolute;
  top: 350px;
  background-color: ${colors.white};
`

const PreTextContainer = styled('div')`
  width: ${dimensions.images.mobileBig.width};
`

const ReadMore = styled(Link)`
  text-decoration: none;
  color: ${colors.lila};
`
