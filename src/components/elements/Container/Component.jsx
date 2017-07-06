import styled from 'styled-components';

const getImportantText = (props) => {
  if (props.important) {
    return 20;
  }

  return props.theme.fontSize;
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
  text-align: ${props => props.textAlign || ''};

  padding: ${props => getPadding(props)}px;

  p {
    font-size: ${getImportantText}px;
    font-weight: 300;
  }
`;

export default Container;
