import { css } from 'emotion'

const mapTemplate = (template, count) => {
  let grids = []
  for (let i = 2; i <= count; i++) {
    let templates = []
    for (let j = 1; j <= count; j++) {
      const style = css`
        &-${j} {
          grid-template-${template}: repeat(${i}, ${j}fr);
        }
      `
      templates.push(style)
    }

    const style = css`
      &-${template === 'rows' ? 'row' : 'col'}-${i} {
        ${templates.map(c => c)}
      }
    `
    grids.push(style)
  }

  return grids
}

const mapGaps = count => {
  let gaps = []
  for (let j = 1; j <= count; j++) {
    const style = css`
      &-${j} {
        grid-gap: ${j}px ${j}px;
      }
    `
    gaps.push(style)
  }

  return gaps
}

const gridStyle = css`
  .gr-container {
    display: grid;
    position: relative;
  }

  .gr-template {
    ${mapTemplate('columns', 6).map(r => r)}
    ${mapTemplate('rows', 6).map(r => r)}

    &-gap {
      ${mapGaps(24).map(r => r)}
    }
  }

  .gr {
    &-justify {
      &-start {
        justify-self: start;
      }
      &-end {
        justify-self: end;
      }
      &-center {
        justify-self: center;
      }
      &-stretch {
        justify-self: stretch;
      }
    }

    &-align {
      &-start {
        align-self: start;
      }
      &-end {
        align-self: end;
      }
      &-center {
        align-self: center;
      }
      &-stretch {
        align-self: stretch;
      }
    }
  }
`

export { gridStyle }
