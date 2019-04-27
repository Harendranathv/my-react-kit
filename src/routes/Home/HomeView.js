import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { toggleLogin } from '../../store/reducers/user'

class HomeView extends Component {
  static propTypes = {
    ua: PropTypes.object,
    user: PropTypes.object,
    toggleLogin: PropTypes.func,
    location: PropTypes.object
  }
  render() {
    const { ua, user, toggleLogin, location } = this.props
    return (
      <Fragment>
        Welcome Home ... !!!
        <br />
        <pre style={{ width: '100%', overflow: 'auto' }}>
          {JSON.stringify({
            ua,
            user,
            location
          }, undefined, 2)}
        </pre>
        <br />
        <a href="#">test</a>
        <br />
        <button onClick={toggleLogin}>toggle login</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ua: state.userAgent,
  user: state.user
})

const mapDispatchToProps = {
  toggleLogin
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(HomeView)
