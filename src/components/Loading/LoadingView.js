import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import CircularProgress from '@material-ui/core/CircularProgress'

import { variables } from '../../styles'

const LoadingWrapper = styled.div`
  text-align: center;
  padding: ${variables.baseSpacing}px;
`

export const Loading = () => (
  <LoadingWrapper>
    <CircularProgress />
  </LoadingWrapper>
)

const LoadingView = props => {
  const { error, timedOut, pastDelay, retry } = props
  if (error) {
    // When the loader has errored
    return <div>Error! <button onClick={retry}>Retry</button></div>
  } else if (timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time... <button onClick={retry}>Retry</button></div>
  } else if (pastDelay) {
    // When the loader has taken longer than the delay
    return <Loading />
  } else {
    // When the loader has just started
    return null
  }
  // return <div>Loading...</div>
}

LoadingView.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func
}

export default LoadingView
