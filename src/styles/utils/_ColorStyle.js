// https://material-ui.com/style/color/

import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'
import teal from '@material-ui/core/colors/teal'
import orange from '@material-ui/core/colors/orange'
import green from '@material-ui/core/colors/green'

const colors = {
  transparent: 'transparent',

  /* White */
  whiteBase: '#FFFFFF',

  /* Black */
  blackBase: 'rgba(0, 0, 0, 0.7)',
  blackLight: 'rgba(0, 0, 0, 0.54)',
  blackLighter: 'rgba(0, 0, 0, 0.38)',
  blackDisabled: 'rgba(0, 0, 0, 0.18)',

  /* Grey */
  greyBase: grey[500],
  greyWildSand: grey[400],
  greySeashell: grey[300],
  greyAlto: grey[200],
  greyGallery: grey[100],

  /* Red */
  redBase: red[500],
  redAlizarinCrimson: red[700],

  /* Teal */
  tealBase: teal[500], // #009688
  tealBaseTransparent: 'rgba(0, 150, 136, 0.7)',

  /* Orange */
  orangeBase: orange[900],

  /* Green */
  greenBase: green[600]
}

export { colors }
