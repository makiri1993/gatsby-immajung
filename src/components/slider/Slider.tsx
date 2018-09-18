import * as React from 'react'
import styled from 'react-emotion'
import { margins, padding } from '../../styles/variables'
import SliderItem from './SliderItem'
interface SliderProps {
  blogposts: any[]
}

interface SliderState {
  title?: string
}

export default class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <SliderContainer>
        {this.props.blogposts.map((post, index) => (
          <SliderSlot>
            <SliderItem
              key={index}
              cat={post.node.frontmatter.category as string}
              imgsrc={post.node.frontmatter.featuredImage as string}
              title={post.node.frontmatter.title as string}
              preText={post.node.excerpt as string}
              link={post.node.fields.slug as string}
            />
          </SliderSlot>
        ))}
      </SliderContainer>
    )
  }
}

const SliderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  align-items: center;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`

const SliderSlot = styled('div')`
  flex: 0 0 auto;
  margin-left: ${margins.md};
  margin-right: ${margins.md};
  @media (max-height: 570px) {
    width: 100vw;
  }
`
