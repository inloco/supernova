import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

class Topbar extends Component {
  static propTypes = {
    children: PropTypes.node,
    logo: PropTypes.node.isRequired
  }

  render() {
    const { children, logo, ...otherProps } = this.props
    return (
      <Menu className="inloco-layout__topbar" {...otherProps}>
        <div className="inloco-layout__topbar-logo">{logo}</div>
        {children}
      </Menu>
    )
  }
}

export default Topbar
