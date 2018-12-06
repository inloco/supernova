import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class HeaderTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { children, className, ...otherProps } = this.props
    return (
      <div
        className={classNames('inloco-layout__header-title', className)}
        {...otherProps}>
        {children}
      </div>
    )
  }
}

export default HeaderTitle
