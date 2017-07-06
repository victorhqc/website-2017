import styled from 'styled-components';

const getColor = ({ theme }) => theme.color;

const Link = styled.a`
  color: ${getColor};
  font-style: none;
`;

export default Link;
