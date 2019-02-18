import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import FormValidatorContext from './Context'
import FormValidatorField from './Field'
import FormValidatorMessage from './Message'

export class FormValidator extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    onSubmitSuccess: PropTypes.func,
    validate: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired
  }

  static Context = FormValidatorContext
  static Field = FormValidatorField
  static Message = FormValidatorMessage

  state = {
    errors: {}
  }

  render() {
    const {
      children,
      className,
      onSubmitSuccess,
      validate,
      value,
      ...otherProps
    } = this.props
    const { errors } = this.state
    const classes = cx('inloco-form-validator', className)
    return (
      <Form className={classes} {...otherProps} onSubmit={this.handleSubmit}>
        <FormValidatorContext.Provider value={{ errors }}>
          {children}
        </FormValidatorContext.Provider>
      </Form>
    )
  }

  componentDidUpdate() {
    if (this.hasErrors()) {
      this.revalidateExistingErrors()
    }
  }

  getFieldsWithError() {
    const { errors } = this.state
    return Object.keys(errors).filter(fieldName => errors[fieldName])
  }

  hasErrors() {
    return this.getFieldsWithError().length > 0
  }

  handleSubmit = (...args) => {
    const { onSubmit, onSubmitSuccess } = this.props
    onSubmit && onSubmit(...args)

    const errors = this.validate()
    this.setState({ errors })
    if (!errors && onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  revalidateExistingErrors() {
    const { errors } = this.state

    const fieldsWithError = this.getFieldsWithError()
    const newErrors = this.validate()

    let haveErrorsChanged = false
    fieldsWithError.forEach(fieldName => {
      if (errors[fieldName] !== newErrors[fieldName]) {
        errors[fieldName] = newErrors[fieldName]
        haveErrorsChanged = true
      }
    })
    if (haveErrorsChanged) {
      this.setState({ errors })
    }
  }

  validate() {
    const { validate, value } = this.props
    return validate(value)
  }
}

export default FormValidator
