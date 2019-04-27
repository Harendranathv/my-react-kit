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

  .clearfix {
    clear: both;
    &::before,
    &::after {
      content: " ";
      display: table;
    }
  }

  .fullwidth {
    width: 100%;
  }

  .img {
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: fixed;
    background-color: rgba(255,255,255,0.8);
    top: 0; bottom: 0; left: 0; right: 0;
    width: 100%;
    z-index: 99;
    &__100 {
      z-index: 100;
    }
    &__101 {
      z-index: 101;
    }
    &__102 {
      z-index: 102;
    }
    // pointer-events: none;
  }

  .button {
    &__close {
      position: fixed;
      top: ${variables.baseSpacing}px;
      right: ${variables.baseSpacing}px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      // background-color: rgba(255,255,255,0.7);
      display: inline-block;
      z-index: 101;
      box-shadow: -3px 3px 10px rgba(0,0,0,0.3);
    }
  }
`

export { coreStyle }
