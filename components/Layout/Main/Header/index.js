import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Sticky } from 'semantic-ui-react'

import LayoutContext from '../../LayoutContext'

class Header extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  static contextType = LayoutContext

  render() {
    const { children, className, ...otherProps } = this.props
    const { withWarning } = this.context

    const classes = cx('inloco-layout__header', className)
    return (
      <Sticky offset={withWarning ? 32 : 0}>
        <div className={classes} {...otherProps}>
          {children}
        </div>
      </Sticky>
    )
  }
}

export default Header
