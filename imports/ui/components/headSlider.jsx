import React, { PropTypes, Component } from 'react';
import Swipeable from 'react-swipeable'
import { throttle } from 'lodash'

import CarouselContainer from './carousel/CarouselContainer'
import Wrapper from './carousel/Wrapper'
import CarouselSlot from './carousel/CarouselSlot'
import Indicator from './carousel/indicator'

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      position: 0,
      sliding: false,
      direction: 'next'
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }
  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }
  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      position,
      direction
    })
    setTimeout(() => {
     this.setState({
        sliding: false
      })
    }, 50)
  }
  handleSwipe = throttle((isNext) => {
    if (isNext) {
      this.nextSlide()
    } else {
      this.prevSlide()
    }
  }, 500, { trailing: false });

componentDidMount(){
  setInterval(() => { 
    this.nextSlide()
  }, 3000);
}


  render() {
    const { title, children } = this.props
    const { sliding, direction, position } = this.state

    return (
      <div>
        {/*<h2>{ title }</h2>*/}
        <Swipeable  onSwipingUp={ () => this.handleSwipe(true) }
                    onSwipingDown={ () => this.handleSwipe() }
                    preventDefaultTouchmoveEvent={true}>
          <Wrapper>
            <CarouselContainer sliding={this.state.sliding} direction={this.state.direction}>
              { children.map((child, index) => (
              <CarouselSlot
                key={ index }
                order={ this.getOrder(index) }
              >
                {child}
              </CarouselSlot>
            )) }
            </CarouselContainer>
            
          </Wrapper>
        </Swipeable>
       <Indicator
        length={ children.length }
        position={ position }
      />
      </div>
    )
  }
}

export default Carousel;