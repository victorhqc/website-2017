
// Color palette, ordered by importance. First element in array is the `primary`
export const COLORS = [
  // Pallette 1
  // Color names thanks to: http://chir.ag/projects/name-that-color/
  // Thanks for the awesome color palette: http://www.color-hex.com/color-palette/41524
  // {
  //   color: '#60c5bd',
  //   name: 'fountainBlue',
  // },
  // {
  //   color: '#95f6d5',
  //   name: 'iceCold',
  // },
  // {
  //   color: '#dfd8e0',
  //   name: 'mishka',
  // },
  // {
  //   color: '#928eb1',
  //   name: 'amethystSmoke',
  // },
  // {
  //   color: '#a7bfd7',
  //   name: 'pigeonPost',
  // },
  // Pallete 2
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
  // Palette 3
  // https://coolors.co/25ced1-ffffff-fceade-ff8a5b-ea526f
  // {
  //   color: '#25CED1',
  //   name: 'darkTurquise',
  // },
  // {
  //   color: '#fff',
  //   name: 'white',
  // },
  // {
  //   color: '#FCEADE',
  //   name: 'moccasin',
  // },
  // {
  //   color: '#FF8A5B',
  //   name: 'coral',
  // },
  // {
  //   color: '#EA526F',
  //   name: 'darkPink',
  // },

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
