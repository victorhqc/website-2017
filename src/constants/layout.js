// Color names thanks to: http://chir.ag/projects/name-that-color/
// Thanks for the awesome color palette: http://www.color-hex.com/color-palette/41524

// Color palette, ordered by importance. First element in array is the `primary`
export const COLORS = [
  {
    color: '#60c5bd',
    name: 'fountainBlue',
  },
  {
    color: '#95f6d5',
    name: 'iceCold',
  },
  {
    color: '#dfd8e0',
    name: 'mishka',
  },
  {
    color: '#928eb1',
    name: 'amethystSmoke',
  },
  {
    color: '#a7bfd7',
    name: 'pigeonPost',
  },
  {
    color: '#333333',
    name: 'almostBlack',
  },
  {
    color: '#fafafa',
    name: 'almostWhite',
  },
];

const findColor = (name, colors) => colors.filter(color => color.name === name);

export const getColor = name => findColor(name, COLORS)[0].color || '#000';

export const GRID = {
  unit: 24,
};
