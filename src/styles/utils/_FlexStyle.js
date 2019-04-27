import { css } from 'emotion'

const flexStyle = css`
  .flex-container {
    display: flex;
    position: relative;
  }

  .flex {
    &-justify {
      &-start {
        justify-content: flex-start;
      }
      &-end {
        justify-content: flex-end;
      }
      &-center {
        justify-content: center;
      }
      &-space {
        justify-content: space-between;
        &-around {
          justify-content: space-around;
        }
        &-evenly {
          justify-content: space-evenly;
        }
      }
    }

    &-align {
      &-start {
        align-items: flex-start;
      }
      &-end {
        align-items: flex-end;
      }
      &-center {
        align-items: center;
      }
      &-stretch {
        align-items: stretch;
      }
      &-baseline {
        align-items: baseline;
      }
    }
  }
`

export { flexStyle }
