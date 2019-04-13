import { injectGlobal } from 'emotion'
import { colors } from './utils/_ColorStyle'
import { breakpoints } from './utils/_BreakpointStyle'
import { variables } from './utils/_VariableStyle'

const coreStyle = injectGlobal`
  html,
  body {
    padding: 0;
    margin: 0;
    line-height: ${20 / 14};
    font-family: 'Open Sans', sans-serif;
    font-size: ${variables.baseFontSize}px;
    color: ${colors.blackBase};
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: ${colors.greenBase};
    text-decoration: none;
    cursor: pointer;

    @media (max-width: ${breakpoints.small}) {
      font-size: 12px;
    }
  }

  b,
  strong {
    font-weight: bold;
  }

  input,
  select,
  textarea {
    outline: none;
    border-style: none;
  }

  button {
    &:focus {
      outline: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 600;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .clearfix::before,
  .clearfix::after {
    content: " ";
    display: table;
  }
`

export { coreStyle }
