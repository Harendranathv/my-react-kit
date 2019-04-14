import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

import routes from '../../routes'
import { scrollTo } from '../../utils/util'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { coreLayoutStyle } from './_CoreLayoutStyle'
import '../../styles'

class CoreLayoutView extends Component {
  static propTypes = {
    location: PropTypes.object
  }

  componentDidMount () {
    scrollTo()
  }

  componentDidUpdate (prev) {
    const { location } = this.props
    const prevLocation = prev.location
    if (location.pathname !== prevLocation.pathname) {
      scrollTo()
    }
  }

  render () {
    return (
      <div className={coreLayoutStyle}>
        <Helmet>
          <title>my-react-kit</title>
          <meta name="title" content="my-react-kit" />
          <meta name="description" content={`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          `} />
          <meta name="robots" content="index, follow" />
          <link rel="manifest" href="/public/manifest.json" />
          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:700" />
        </Helmet>
        <Header />
        <div className="viewport">{renderRoutes(routes)}</div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(CoreLayoutView)
