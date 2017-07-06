// Color palette, ordered by importance. First element in array is the `primary`
export const COLORS = [
  // https://coolors.co/bce784-5dd39e-348aa7-525174-513b56
  {
    color: '#BCE784',
    name: 'mediumSpringBud',
  },
  {
    color: '#5DD39E',
    name: 'mediumAquaMarine',
  },
  {
    color: '#348AA7',
    name: 'steelBlue',
  },
  {
    color: '#525174',
    name: 'independence',
  },
  {
    color: '#513B56',
    name: 'pineapple',
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

export const getColorByName = name => (findColor(name, COLORS)[0] || {}).color || '#000';

export const getColorByPosition = position => (COLORS[position] || {}).color || '#000';

export const GRID = {
  unit: 24,
};
