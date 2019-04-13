import { css } from 'emotion'

const coreLayoutStyle = css`
  label: core-layout;

  .viewport {
    /* padding-top: 52px; */
    /* padding-bottom: 24px; */
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    &--nofooter {
      padding-bottom: 0;
    }
  }
`

export { coreLayoutStyle }
