import styled from 'styled-components';

const getGrow = (props) => {
  if (props.grow) {
    return props.grow;
  }

  return 1;
};

const getBasis = (props) => {
  if (props.basis) {
    return props.basis;
  }

  return 'auto';
};

const Column = styled.div`
  flex-grow: ${props => getGrow(props)};
  flex-basis: ${props => getBasis(props)};
`;

export default Column;
