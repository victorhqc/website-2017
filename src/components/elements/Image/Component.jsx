import styled from 'styled-components';

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: ${props => props.backgroundSize || 'cover'};
`;

export default Image;
