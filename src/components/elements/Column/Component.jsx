import styled from 'styled-components';

const Column = styled.div`
  flex-grow: ${props => props.grow || 1};
  flex-basis: ${props => props.basis || 'auto'};
`;

export default Column;
