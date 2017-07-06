import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

import {
  getColorByPosition,
  getColorByName,

  GRID,
} from '../../constants/layout';

const generalStyle = {
  colors: {
    primary: getColorByPosition(0),
    secondary: getColorByPosition(1),

    complement: getColorByPosition(2),
    secondaryComplement: getColorByPosition(3),

    accent: getColorByPosition(4),

    black: getColorByPosition(5),
    white: getColorByPosition(6),
  },

  fontSize: 16,
  fontFamily: '\'Roboto\', sans-serif',

  gridUnit: GRID.unit,
};

const darkTheme = {
  ...generalStyle,

  color: getColorByName('almostWhite'),
};

const lightTheme = {
  ...generalStyle,

  color: getColorByName('almostBlack'),
};

export const DarkTheme = props => (
  <ThemeProvider theme={darkTheme}>
    {props.children}
  </ThemeProvider>
);

DarkTheme.defaultProps = {
  children: null,
};

DarkTheme.propTypes = {
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
