import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export class FormValidatorMessage extends Component {
  static propTypes = {
    className: PropTypes.string,
    message: PropTypes.string
  }

  render() {
    const { className, message, ...otherProps } = this.props
    const classes = cx('inloco-form-validator__message', className)
    return (
      <div className={classes} {...otherProps}>
        {message && <Icon className="error" size="big" />}
        {message}
      </div>
    )
  }
}

export default FormValidatorMessage
