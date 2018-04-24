import React, { Component, PropTypes } from 'react';
import styled from 'styled-components'
const Container = styled.div`
  margin-bottom: 20px;
`
const Pip = styled.span`
  
  border:${(props) => (props.isCurrent) ? '2px solid #ffff ' : '1px solid #7daad9'}
  position:relative;
  width:17px;
  height:17px;
  padding:4px;
  border-radius:50%;
  margin-right: 5px;
  display: inline-block;
  transition: border 0.5s ease;
  cursor: pointer;
`
const PipNum = styled.span`
  opacity: ${(props) => (props.isCurrent) ? 1 : 0};
  transition:opacity .5s ease;
  color:#fff;
  &:before {
    content: "";
    width:35px;
    height:2px;
    display:inline-block;
    background:#80b1dc; 
    margin-right:12px;
    position: relative;
    bottom: 7px;
  }
`
const PipDot = styled.span`
background: ${(props) => (props.isCurrent) ? '#48ff99' : 'transparent'};
  width: 8px;
  height: 8px;
  position:absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`
const Big = styled.span`
  font-size:2.3rem;
`
const divStyle = {
  height: '27px'};
class Indicator extends Component {
  render() {
    const { length, position } = this.props
  return (
      <Container>
        {
          Array.from({ length }, (pip, i) => 
            (<div key={ i } style={divStyle}>
              <Pip
                index={i}
                isCurrent={ i === position }
              >
                <PipDot index={i}
                isCurrent={ i === position }></PipDot>
              </Pip>
              <PipNum 
                index={i}
                isCurrent={ i === position }>
                <Big>0{i+1}</Big>
                /0{length}</PipNum>
              </div>
            )
          )
        }
      </Container>
    )
  }
}

export default Indicator;