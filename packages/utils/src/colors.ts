// import { isNil } from 'lodash-es';

const colorNames: { [key:string]:string; } = {
  aqua: '#00ffff', black: '#000000', blue: '#0000ff', fuchsia: '#ff00ff',
  gray: '#808080', green: '#008000', lime: '#00ff00', maroon: '#800000',
  navy: '#000080', olive: '#808000', purple: '#800080', red: '#ff0000',
  silver: '#c0c0c0', teal: '#008080', white: '#ffffff', yellow: '#ffff00'
}

export function color2rgb(color: string) : [number, number, number] {
  if (color in colorNames) {
    color = colorNames[color];
  }

  if (!color) {
    return [0, 0, 0];
  }

  color = color.replace('#','');

  let r = parseInt(color.substring(0,2), 16);
  let g = parseInt(color.substring(2,4), 16);
  let b = parseInt(color.substring(4,6), 16);

  return [r / 255, g / 255, b / 255];
}

export const viridis : [number, number, number][] = [
  [0.267004, 0.004874, 0.329415],
  [0.282327, 0.094955, 0.417331],
  [0.278826, 0.17549, 0.483397],
  [0.258965, 0.251537, 0.524736],
  [0.229739, 0.322361, 0.545706],
  [0.19943, 0.387607, 0.554642],
  [0.172719, 0.448791, 0.557885],
  [0.149039, 0.508051, 0.55725],
  [0.127568, 0.566949, 0.550556],
  [0.120638, 0.625828, 0.533488],
  [0.157851, 0.683765, 0.501686],
  [0.24607, 0.73891, 0.452024],
  [0.369214, 0.788888, 0.382914],
  [0.515992, 0.831158, 0.294279],
  [0.678489, 0.863742, 0.189503],
  [0.845561, 0.887322, 0.099702],
  [0.993248, 0.906157, 0.143936]
];

export const plasma : [number, number, number][] = [
  [0.050383, 0.029803, 0.527975],
  [0.193374, 0.018354, 0.59033],
  [0.299855, 0.009561, 0.631624],
  [0.399411, 0.000859, 0.656133],
  [0.494877, 0.01199, 0.657865],
  [0.584391, 0.068579, 0.632812],
  [0.665129, 0.138566, 0.585582],
  [0.736019, 0.209439, 0.527908],
  [0.798216, 0.280197, 0.469538],
  [0.853319, 0.351553, 0.413734],
  [0.901807, 0.425087, 0.359688],
  [0.942598, 0.502639, 0.305816],
  [0.973416, 0.585761, 0.25154],
  [0.991365, 0.675355, 0.198453],
  [0.993033, 0.77172, 0.154808],
  [0.974443, 0.874622, 0.144061],
  [0.940015, 0.975158, 0.131326]
];

export const gray : [number, number, number][] = [
  [0, 0, 0],
  [1, 1, 1]
];

export const grayInv : [number, number, number][] = [
  [1, 1, 1],
  [0, 0, 0]
];

export const redYelBlu : [number, number, number][] = [
  [1, 0, 0],
  [1, 1, 0],
  [0, 0, 1]
];

export const redBlue : [number, number, number][] = [
  [1, 0, 0],
  [1, 0, 0],
  [0, 0, 1],
  [0, 0, 1]
]
