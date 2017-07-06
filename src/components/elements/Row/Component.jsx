import styled from 'styled-components';

const getFlexDirection = (props) => {
  if (props.inverted) {
    return 'row-reverse';
  }

  return 'row';
};

const getWrap = (props) => {
  if (props.wrap) {
    return 'wrap';
  }

  return 'nowrap';
};

const Row = styled.div`
  display: flex;

  flex-direction: ${props => getFlexDirection(props)};
  flex-wrap: ${props => getWrap(props)};

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default Row;
