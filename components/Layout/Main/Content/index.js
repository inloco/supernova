import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class MainContent extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.Component]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { as, children, className, ...otherProps } = this.props
    const classes = cx('inloco-layout__main-content', className)
    const ElementType = this.props.as || 'div'
    return (
      <ElementType className={classes} {...otherProps}>
        {children}
      </ElementType>
    )
  }
}

export default MainContent
