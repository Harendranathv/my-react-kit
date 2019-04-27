import { css } from 'emotion'
import { variables } from '../../styles'

const coreLayoutStyle = css`
  label: core-layout;

  .viewport {
    /* padding-top: 52px; */
    padding-bottom: ${variables.baseSpacing}px;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    &--nofooter {
      padding-bottom: 0;
    }

    &.fixed {
      overflow: hidden;
    }
  }
`

export { coreLayoutStyle }
