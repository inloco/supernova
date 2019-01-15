import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class WizardStep extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, className, ...otherProps } = this.props
    const classes = cx('inloco-wizard__step', className)
    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}

export default WizardStep
