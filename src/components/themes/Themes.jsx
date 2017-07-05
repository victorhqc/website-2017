import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

import {
  getColor,

  GRID,
} from '../../constants/layout';

const generalStyle = {
  colors: {
    primary: getColor('fountainBlue'),
    secondary: getColor('iceCold'),

    complement: getColor('mishka'),
    secondaryComplement: getColor('amethystSmoke'),

    black: getColor('almostBlack'),
    white: getColor('almostWhite'),
    grey: getColor('pigeonPost'),
  },

  fontSize: 16,
  fontFamily: '\'Roboto\', sans-serif',

  gridUnit: GRID.unit,
};

const greenTheme = {
  ...generalStyle,

  color: getColor('almostWhite'),
};

const lightTheme = {
  ...generalStyle,

  color: getColor('almostBlack'),
};

export const GreenTheme = props => (
  <ThemeProvider theme={greenTheme}>
    {props.children}
  </ThemeProvider>
);

GreenTheme.defaultProps = {
  children: null,
};

GreenTheme.propTypes = {
  children: PropTypes.node,
};

export const LightTheme = props => (
  <ThemeProvider theme={lightTheme}>
    {props.children}
  </ThemeProvider>
);

LightTheme.defaultProps = {
  children: null,
};

LightTheme.propTypes = {
  children: PropTypes.node,
};
