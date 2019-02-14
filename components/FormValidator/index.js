import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import FormValidatorContext from './Context'

export class FormValidator extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    onSubmitSuccess: PropTypes.func,
    rules: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired
  }

  static Context = FormValidatorContext

  state = {
    errors: {}
  }

  render() {
    const {
      children,
      className,
      onSubmitSuccess,
      rules,
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

    const success = this.validateAll()
    if (success && onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  revalidateExistingErrors() {
    const { errors } = this.state

    const fieldsWithError = this.getFieldsWithError()
    const { errors: newErrors } = this.runRules(fieldsWithError)

    const haveErrorsChanged = fieldsWithError.some(
      fieldName => errors[fieldName] !== newErrors[fieldName]
    )
    if (haveErrorsChanged) {
      this.setState({ errors: newErrors })
    }
  }

  runRule = fieldName => {
    const { rules, value } = this.props
    const rule = rules[fieldName]

    if (!rule.validate(value[fieldName])) {
      return typeof rule.message === 'function'
        ? rule.message({ fieldName })
        : rule.message
    }
  }

  runRules(fieldNames) {
    const errorsArray = fieldNames.map(this.runRule)
    const success = errorsArray.filter(error => !!error).length > 0

    const errors = {}
    fieldNames.forEach(
      (fieldName, index) => (errors[fieldName] = errorsArray[index])
    )

    return { errors, success }
  }

  validateAll() {
    const allFields = Object.keys(this.props.rules)
    const { errors, success } = this.runRules(allFields)
    this.setState({ errors })
    return success
  }
}

export default FormValidator
