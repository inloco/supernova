import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  render() {
    const { className, children, ...otherProps } = this.props
    const classes = cx('inloco-layout__sidebar-footer', className)
    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}

export default Footer
