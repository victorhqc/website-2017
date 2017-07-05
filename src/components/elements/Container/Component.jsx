import styled from 'styled-components';

const importantText = (props) => {
  if (props.important) {
    return 20;
  }

  return props.theme.fontSize;
};

const Container = styled.div`
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.fontFamily};

  padding: ${props => props.theme.gridUnit}px;

  p {
    font-size: ${importantText}px;
    font-weight: 300;
  }
`;

export default Container;
