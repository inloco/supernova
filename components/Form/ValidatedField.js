import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import FormFieldMessage from './FieldMessage'

export class FormValidatedField extends Component {
  static propTypes = {
    children: PropTypes.node,
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  }

  render() {
    const { children, message, ...otherProps } = this.props
    return (
      <Form.Field error={!!message} {...otherProps}>
        {children}
        <FormFieldMessage message={message} />
      </Form.Field>
    )
  }
}

Form.ValidatedField = FormValidatedField

export default FormValidatedField
