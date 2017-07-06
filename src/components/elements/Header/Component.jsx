import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';

const primaryColor = ({ theme }) => theme.colors.complement;
const secondaryColor = ({ theme }) => theme.colors.secondaryComplement;

const mobileSize = ({ theme }) => theme.sizes.mobile;

const getBackground = (props) => {
  if (!props.coverImage) {
    return `linear-gradient(-45deg, ${primaryColor(props)}, ${secondaryColor(props)})`;
  }

  return `
    url(${props.coverImage}), linear-gradient(-45deg, ${primaryColor(props)}, ${secondaryColor(props)})
    `;
};

const Header = styled.div`
  background: ${primaryColor};
  background: linear-gradient(left top, ${primaryColor}, ${secondaryColor});
  background: ${getBackground};
  background-blend-mode: overlay;
  background-size: cover;

  @media (max-width: ${mobileSize}px) {
    background-position: 75%;
  }

  height: 100vh;
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    font-weight: lighter;

    small {
      font-size: 24px;
    }
  }
`;

const HeaderComponent = ({ children, ...props }) => (
  <Header {...props}>
    <Container>{children}</Container>
  </Header>
);

HeaderComponent.defaultProps = {
  children: null,
};

HeaderComponent.propTypes = {
  children: PropTypes.node,
};


export default HeaderComponent;
