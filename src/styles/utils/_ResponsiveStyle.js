import { css } from 'emotion'
import { breakpoints } from './_BreakpointStyle'

const mapCols = count => {
  let result = []
  const px = ['', 'sm', 'md', 'lg', 'xl']
  const br = [
    0,
    breakpoints.small,
    breakpoints.medium,
    breakpoints.large,
    breakpoints.xlarge
  ]
  const baseStyle = css `
    min-height: 1px;
    float: left;
    box-sizing: border-box;
    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }
  `

  for (let i = 0; i < px.length; i++) {
    let cols = []
    for (let j = 1; j <= count; j++) {
      const style = css`
        &-${j} {
          width: ${100 / count * j}%;
        }
      `
      cols.push(style)
    }

    const style = !px[i]
      ? css`
        .col {
          ${baseStyle}
          ${cols.map(col => col)}
        }
      `
      : css`
        @media (min-width: ${br[i]}) {
          .col-${px[i]} {
            ${baseStyle}
            ${cols.map(col => col)}
          }
        }
      `

    result.push(style)
  }

  return result
}

const responsiveStyle = css`
  .col-container {
    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }
  }

  ${mapCols(12).map(col => col)}
`

export { responsiveStyle }
