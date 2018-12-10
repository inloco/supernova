import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

class Topbar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    logo: PropTypes.node.isRequired
  }

  render() {
    const { children, className, logo, ...otherProps } = this.props
    const classes = cx('inloco-layout__topbar', className)
    return (
      <Menu className={classes} {...otherProps}>
        <div className="inloco-layout__topbar-logo">{logo}</div>
        {children}
      </Menu>
    )
  }
}

export default Topbar
