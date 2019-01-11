import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import SidebarContext from '../SidebarContext'

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  static contextType = SidebarContext

  render() {
    const { className, children, ...otherProps } = this.props
    const classes = cx('inloco-layout__sidebar-footer', className)
    return (
      <div className={classes} {...otherProps}>
        <SidebarContext.Provider value={{ ...this.context, isFooter: true }}>
          {children}
        </SidebarContext.Provider>
      </div>
    )
  }
}

export default Footer
