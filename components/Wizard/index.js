import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import WizardFooter from './Footer'
import WizardFooterBasicControls from './Footer/BasicControls'

export class Wizard extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  static Footer = WizardFooter
  static FooterBasicControls = WizardFooterBasicControls

  render() {
    const { children, className, ...otherProps } = this.props
    const classes = cx('inloco-wizard', className)
    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}

export default Wizard
