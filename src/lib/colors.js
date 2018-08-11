// XXX: Try to avoid selecting colors from `colors.base` directly when possible.
// Instead, select colors from `colors.status`, `colors.typography`, or
// `colors.ui` that best match the intended purpose.

import { transparentize } from 'polished';

const base = {
  brand: {
    light: 'hsla(205, 87%, 94%, 1)',
    default: 'hsla(210, 97%, 41%, 1)',
  },
  contact: {
    default: 'hsla(0, 0%, 62%, 1)',
  },
  invoice: {
    default: 'hsla(291, 47%, 60%, 1)',
  },
  transaction: {
    default: 'hsla(340, 83%, 66%, 1)',
  },
  black: {
    default: 'hsla(0, 0%, 26%, 1)',
  },
  gray: {
    light: 'hsla(0, 0%, 96%, 1)',
    default: 'hsla(0, 0%, 88%, 1)',
    dark: 'hsla(0, 0%, 62%, 1)',
  },
  white: {
    default: 'hsla(0, 100%, 100%, 1)',
  },
};

// We treat our customisation colors as a collection so we can extend and change
// the colors easily in the future.
const customisation = {
  red: {
    id: '1',
    default: 'hsla(1, 70%, 67%, 1)',
  },
  pink: {
    id: '2',
    default: 'hsla(340, 83%, 66%, 1)',
  },
  purple: {
    id: '3',
    default: 'hsla(291, 47%, 60%, 1)',
  },
  deepPurple: {
    id: '4',
    default: 'hsla(262, 47%, 63%, 1)',
  },
  indigo: {
    id: '5',
    default: 'hsla(230, 44%, 64%, 1)',
  },
  blue: {
    id: '6',
    default: 'hsla(207, 89%, 68%, 1)',
  },
  lightBlue: {
    id: '7',
    default: 'hsla(199, 91%, 64%, 1)',
  },
  cyan: {
    id: '8',
    default: 'hsla(187, 71%, 59%, 1)',
  },
  teal: {
    id: '9',
    default: 'hsla(174, 42%, 51%, 1)',
  },
  green: {
    id: '10',
    default: 'hsla(123, 38%, 64%, 1)',
  },
  lightGreen: {
    id: '11',
    default: 'hsla(88, 50%, 67%, 1)',
  },
  lime: {
    id: '12',
    default: 'hsla(66, 70%, 68%, 1)',
  },
  yellow: {
    id: '13',
    default: 'hsla(60, 100%, 69%, 1)',
  },
  amber: {
    id: '14',
    default: 'hsla(46, 100%, 66%, 1)',
  },
  orange: {
    id: '15',
    default: 'hsla(36, 100%, 65%, 1)',
  },
  deepOrange: {
    id: '16',
    default: 'hsla(14, 100%, 70%, 1)',
  },
};

const intent = {
  muted: {
    light: base.gray.default,
    default: base.gray.dark,
  },
  active: {
    light: base.brand.light,
    default: base.brand.default,
  },
  info: {
    light: base.brand.light,
    default: base.brand.default,
  },
  success: {
    light: 'hsla(88, 52%, 94%, 1)',
    default: 'hsla(88, 50%, 53%, 1)',
  },
  warning: {
    light: 'hsla(37, 100%, 94%, 1)',
    default: 'hsla(36, 100%, 50%, 1)',
  },
  danger: {
    light: 'hsla(351, 100%, 96%, 1)',
    default: 'hsla(4, 90%, 58%, 1)',
  },
  default: {
    light: base.white.default,
    default: base.white.default,
  },
};

const typography = {
  font: {
    lighter: base.gray.default,
    light: base.gray.dark,
    default: base.black.default,
  },
  inverted: {
    default: base.white.default,
  },
  link: {
    default: base.brand.default,
  },
};

const ui = {
  background: {
    lighter: base.white.default,
    light: base.gray.light,
    default: base.gray.default,
    dark: base.gray.dark,
  },
  border: {
    light: base.white.default,
    default: base.gray.default,
  },
  active: {
    light: base.brand.light,
    default: base.brand.default,
  },
  shadow: {
    light: transparentize(0.16, base.white.default),
    default: transparentize(0.76, base.black.default),
  },
};

const colors = {
  base,
  customisation,
  intent,
  typography,
  ui,
};

export default colors;
export { base, customisation, intent, typography, ui, colors };
