import * as React from 'react'
import { Children, cloneElement } from 'react';
import { margins } from '../../styles/variables'

import styled from 'react-emotion'
const { throttle } = require('lodash')
const Swipeable = require('react-swipeable')

interface SliderProps{
  title?: string
  order: number
  sliding: boolean
}

interface SliderState{
  title?: string
  position: number
  sliding: boolean
  direction: string
}

export default class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props)
    this.state = {
      position: 0,
      sliding: true,
      direction: 'next',
    }
  }

  /*
  * Swipeable methods to handle slides on touch devices
  */
  public handleSwipe = throttle((isNext) => {
    const { children } = this.props
    const items = children.length || 1
      if (isNext && items > 1) {
        this.nextItem()
      } else if (items > 1) {
        this.prevItem()
      }
  }, 500, { trailing: false })

  /*
  * Method to get the item order
  * input: itemIndex -> The place where the Item is currently placed in the DOM
  * return: the position where the item should appear
  */
  public getItemOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    /* Number of items */
    const items = children.length || 1

    if (items === 2) return itemIndex
      /* The abs method calculats the difference between two numbers */
    if (itemIndex - position < 0) return items - Math.abs(itemIndex - position)
    return itemIndex  - position
  }

  /*
  * Method to show next item in the slider
  *
  * Sets the position state to the next item
  */
  public nextItem = () => {
    const { position } = this.state
    const { children } = this.props
    /* Number of items */
    const items = children.length || 1

    this.slide('next', position === items - 1 ? 0 : position + 1)
  }

  /*
  * Method to show prev item in the slider
  */
  public prevItem = () => {
    const { position } = this.state
    const { children } = this.props
    /* Number of items */
    const items = children.length || 1

    this.slide('prev', position === 0 ? items - 1 : position - 1)
  }

  /*
   * Method to animate the slide
   * input: position => the position of the current item
   * An animation lasts for 50ms
   */

  public slide = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position,
    })
    setTimeout(() => {
      this.setState({
        sliding: false,
      })
    },         50)
  }

  public render() {
    const { title, children } = this.props
    const { sliding, direction, position } = this.state

    const childrenWithProps = Children.map(children, (child) => cloneElement(child, {
      numSlides: children.length || 1
    })
)

    return(
        <Swipeable
          onSwipingLeft={ () => this.handleSwipe(true) }
          onSwipingRight={ () => this.handleSwipe() }
          >
          {/* Wraps the slider component in a 100% width div with an hidden overflow*/}
        <SliderWrapper>
          <SliderContainer
            sliding = { sliding }
            direction = { direction }
            items = {children.length}>
            {children.map((child, index) => (
            <SliderSlot key={index} order={this.getItemOrder(index)} position={ position }> 
                {child} 
            </SliderSlot>))}
          </SliderContainer>
        </SliderWrapper>
        </Swipeable>
    )
  }
}

const SliderWrapper = styled('div')`
  /* Cuts everything that isnt seen, so the page has no horrizontal scrolling*/
`

const SliderContainer = styled('div')`
  display: flex;
  width: 100%;
  /* All the stuff for the animation */
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  /* Here is a bug with the order of the items*/
  transform: ${(props) => {
    if (props.items === 1) {
      return 'translateX(0%)'
    }
    if (props.items === 2) {
      if (!props.sliding && props.direction === 'next') {
        return 'translateX(calc(-80% + 30px))'
      }
      if (!props.sliding && props.direction === 'prev') {
        return 'translateX(0%)'
      }
      if (props.direction === 'prev') { 
        return 'translateX(calc(-80% + 30px))'
      }
      return 'translateX(0%)'
    }
    if (!props.sliding) {
      return 'translateX(calc(-100% - 20px))'
    }
    if (props.direction === 'prev') {
      return 'translateX(calc(2 * (-100% - 20px)))'
    }
    return 'translateX(0%)'
  }};

`

/* Slot for the items wich will sit in the SliderContainer*/
const SliderSlot = styled('div')`
  /* width and height of the flex item*/
  flex: 0 0 auto;
  height: auto;
  width: 90vw;
  /* get the place in the DOM of the item */
  order: ${(props) => props.order};
  @media (max-height: 570px) {
    width: 100vw;
  }

`
