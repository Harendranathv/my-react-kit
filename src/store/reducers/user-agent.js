const initialState = null

const INIT_UA = 'APP/INIT_UA'

export const initUserAgent = data => {
  return {
    type: INIT_UA,
    payload: data
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_UA: {
      return {
        ...action.payload,
        isMobile:
          ['mobile', 'tablet'].indexOf(action.payload.device.type) !== -1,
        isAndroid: ['Android'].indexOf(action.payload.os.name) !== -1
      }
    }
    default: {
      return state
    }
  }
}
