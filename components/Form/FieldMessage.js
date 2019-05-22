import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon, Form } from 'semantic-ui-react'

export class FormFieldMessage extends Component {
  static propTypes = {
    className: PropTypes.string,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  }

  render() {
    const { className, message, ...otherProps } = this.props
    const classes = cx('inloco-form-validator__message', className)
    return (
      <div className={classes} {...otherProps}>
        {message}
      </div>
    )
  }
}

Form.FieldMessage = FormFieldMessage

export default FormFieldMessage
