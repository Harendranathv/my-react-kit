import smoothScroll from 'smoothscroll'

export const offset = id => {
  if (!window || !document) {
    return
  }
  let el = document.getElementById(id)
  if (!el && !el.getBoundingClientRect) {
    return
  }
  let rect = el.getBoundingClientRect(),
  scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return rect.top + scrollTop
}

export const scrollTo = (target = 'TOP', counter = 100) => {
  if (target === 'TOP') {
    smoothScroll(0)
    return
  }
  smoothScroll(offset(target) - counter)
}

export const getScrollData = (w, d) => {
  let _h = d.documentElement,
  _b = d.body,
  _st = 'scrollTop',
  _sh = 'scrollHeight',
  __st = w.pageYOffset || d.documentElement.scrollTop

  let scrollDir = __st <= 0 ? 'top' : 'down'

  let scrollPercent = Math.floor((_h[_st]||_b[_st]) / ((_h[_sh]||_b[_sh]) - _h.clientHeight) * 100)

  return {
    direction: scrollDir,
    percentage: scrollPercent
  }
}

export const isTouchDevice = d => {
  return 'ontouchstart' in d.documentElement;
}
