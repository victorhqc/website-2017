import styled from 'styled-components';

const importantText = (props) => {
  if (props.important) {
    return 20;
  }

  return props.theme.fontSize;
};

const textAlign = (props) => {
  if (props.textAlign) {
    return props.textAlign;
  }

  return '';
};

const getPadding = (props) => {
  if (props.noPadding) {
    return 0;
  }

  return props.theme.gridUnit;
};

const Container = styled.div`
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.fontFamily};
  text-align: ${props => textAlign(props)};

  padding: ${props => getPadding(props)}px;

  p {
    font-size: ${importantText}px;
    font-weight: 300;
  }
`;

export default Container;
