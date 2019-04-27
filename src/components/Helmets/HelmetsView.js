import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

class HelmetsView extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  handleRenderHeaders = () => {
    const { items } = this.props
    return Object.keys(items).map((item, i) => {
      if (item === "title") {
        return <title key={i}>{items[item]}</title>
      }

      if (item === "meta") {
        return items[item].map((meta, j) => (
          <meta key={j} {...meta} />
        ))
      }

      if (item === "link") {
        return items[item].map((link, j) => (
          <link key={j} {...link} />
        ))
      }
    })
  }

  render () {
    const { children } = this.props
    return (
      <Helmet>
        {this.handleRenderHeaders()}
        {children}
      </Helmet>
    )
  }
}

export default HelmetsView
