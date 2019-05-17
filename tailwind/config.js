var _ = require('lodash')

module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    screens: {
      lg: '1024px'
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: {
        50: '#FAFBFC',
        100: '#F5F6F7',
        200: '#EEEFF0',
        300: '#E3E4E5',
        400: '#D7D8D9',
        500: '#BDBEBF',
        600: '#9E9FA0',
        700: '#757677',
        800: '#616263',
        900: '#4A4B4C'
      },
      green: {
        50: '#F2F8ED',
        100: '#D7EDC4',
        200: '#BCE39C',
        300: '#A9DB81',
        400: '#90CC62',
        500: '#7DBB4E',
        600: '#68A838',
        700: '#528F24',
        800: '#448017',
        900: '#33690B'
      },
      red: {
        50: '#FBECEE',
        100: '#FFABB9',
        200: '#F58799',
        300: '#F06C81',
        400: '#E85A71',
        500: '#DE425B',
        600: '#C92C46',
        700: '#B81B35',
        800: '#A61029',
        900: '#8A051B'
      },
      space: {
        50: '#FAFBFC',
        100: '#E3E6E8',
        200: '#C7CDD1',
        300: '#ABB4BA',
        400: '#8F9BA3',
        500: '#73818C',
        600: '#576875',
        700: '#3B4F5E',
        800: '#1F3647',
        900: '#031D30'
      },
      wave: {
        50: '#EEFDFF',
        100: '#C4E9F5',
        200: '#A4DAEB',
        300: '#82C6D9',
        400: '#5AB5CC',
        500: '#0096B4',
        600: '#017E9A',
        700: '#01667D',
        800: '#004F61',
        900: '#003C4A'
      },
      yellow: {
        50: '#FCF4E5',
        100: '#FFEAB5',
        200: '#FFDA82',
        300: '#FFBE33',
        400: '#F9AA00',
        500: '#E69900',
        600: '#C77E00',
        700: '#AB5B00',
        800: '#853800',
        900: '#6E2E00'
      }
    },
    spacing: {
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px'
    },

    backgroundColor: theme => ({
      white: theme('colors').white,
      gray: { 50: theme('colors').gray['50'] }
    }),

    //TODO: yellow-50, green-50, red-50, space-900

    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },
    borderColor: theme => ({
      //definir
      ...theme('colors')
    }),
    borderRadius: {
      //definir
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      '0': '0'
    },
    boxShadow: {
      200: '0 4px 16px -1px rgba(62, 73, 101, .16)',
      300: '0 8px 10px -4px rgba(62, 73, 101, .20)',
      400: '0 16px 24px -6px rgba(62, 73, 101, .20)',
      500: '0 24px 32px -8px rgba(62, 73, 101, .20)',
      default: '0 4px 16px -1px rgba(62, 73, 101, .16)',
      none: 'none'
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },
    fill: {
      current: 'currentColor'
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      '0': '0',
      default: '1'
    },
    flexShrink: {
      '0': '0',
      default: '1'
    },
    fontFamily: {
      sans: ['Roboto', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      //12, 14, 20, 24 OBS: Redefinir (pendente)
      sm: '12px',
      base: '14px',
      lg: '20',
      xl: '24'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500'
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    inset: {
      '0': '0',
      auto: 'auto'
    },
    letterSpacing: {
      //.3 , 0
      normal: '0'
    },
    lineHeight: {
      // 12/14, 14/20, 20/24, 24/28
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh'
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%'
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      '0': '0',
      full: '100%'
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      //0, 0.08, 0.1, 0.2, 0.25, .3, .33, .5, .6, .66, .75, .8, .88, 1 (revisitar)
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    },
    padding: theme => theme('spacing'),
    stroke: {
      current: 'currentColor'
    },
    textColor: theme => ({
      gray: _.pick(theme('colors.gray'), ['800', '900'])
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      screen: '100vw'
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50'
    }
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive']
  },
  corePlugins: {},
  plugins: []
}
