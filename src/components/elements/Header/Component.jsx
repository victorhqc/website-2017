import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';

const primaryColor = ({ theme }) => theme.colors.primary;
const secondaryColor = ({ theme }) => theme.colors.secondary;

const Header = styled.div`
  background: ${primaryColor};
  background: linear-gradient(left top, ${primaryColor}, ${secondaryColor});
  background: linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor});

  height: 300px;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: lighter;

    small {
      font-size: 24px;
    }
  }
`;

const HeaderComponent = props => (
  <Header>
    <Container>{props.children}</Container>
  </Header>
);

HeaderComponent.defaultProps = {
  children: null,
};

HeaderComponent.propTypes = {
  children: PropTypes.node,
};


export default HeaderComponent;
