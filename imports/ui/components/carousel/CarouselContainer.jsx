import styled from 'styled-components';
const CarouselContainer = styled.div`
  	display: flex;
  	flex-direction:column;
  	transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
	transform: ${(props) => {
	  if (!props.sliding) return 'translateY(calc(-300px ))'
	  if (props.direction === 'prev') return 'translateY(calc(2 * (-300px )))'
	  return 'translateY(0%)'
	}};
`
export default CarouselContainer