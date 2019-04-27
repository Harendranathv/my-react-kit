import React, { Component, Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from '../../routes'
import { coreLayoutHeader } from '../../constants/headers'

import Helmets from '../../components/Helmets'
import Footer from '../../components/Footer'

import { coreLayoutStyle } from './_CoreLayoutStyle'
import '../../styles'

class CoreLayoutView extends Component {
  render () {
    return (
      <Fragment>
        <Helmets items={coreLayoutHeader} />
        <div className={coreLayoutStyle}>
          <div className="viewport">
            <div>{renderRoutes(routes)}</div>
          </div>
          <Footer />
        </div>
      </Fragment>
    )
  }
}

export default CoreLayoutView
