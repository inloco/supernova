import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import FormValidatorContext from './Context'
import FormValidatorMessage from './Message'

export class FormValidatorField extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string.isRequired
  }

  static contextType = FormValidatorContext

  render() {
    const { children, className, name, ...otherProps } = this.props
    const { errors = {} } = this.context
    const classes = cx('inloco-form-validator__field', className)
    return (
      <Form.Field
        className={classes}
        name={name}
        error={!!errors[name]}
        {...otherProps}>
        {children}
        <FormValidatorMessage message={errors[name]} />
      </Form.Field>
    )
  }
}

export default FormValidatorField
