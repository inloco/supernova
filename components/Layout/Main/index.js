import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Main extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { children, className, ...otherProps } = this.props
    const classes = cx('inloco-layout__main', className)
    return (
      <main className={classes} {...otherProps}>
        {children}
      </main>
    )
  }
}

export default Main
