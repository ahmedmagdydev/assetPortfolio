import styled from 'styled-components';
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props) => props.order};
  opacity: ${(props) => props.order === 1 ? 1 : 0.5};
  transition: opacity 1s ease;
`
export default CarouselSlot;