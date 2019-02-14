import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, Checkbox, Input, FormValidator } from '../../components'

const RULES = {
  firstName: {
    message: 'The first name is required.',
    validate: value => value
  },
  lastName: {
    message: 'The last name is required.',
    validate: value => value
  },
  website: {
    message: 'The website is required and must have at least one dot (".").',
    validate: value => value && value.includes('.')
  },
  terms: {
    message: 'The terms must be accepted.',
    validate: value => value
  }
}

class ExampleForm extends Component {
  state = {
    value: {}
  }

  render() {
    const { value } = this.state
    return (
      <FormValidator
        rules={RULES}
        value={value}
        onSubmitSuccess={action('Valid form submission!')}>
        <FormValidator.Field name="firstName">
          <label>First Name</label>
          <Input
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          />
        </FormValidator.Field>
        <FormValidator.Field name="lastName">
          <label>Last Name</label>
          <Input
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          />
        </FormValidator.Field>
        <FormValidator.Field name="website">
          <label>Website</label>
          <Input
            placeholder="Website"
            label="https://"
            name="website"
            onChange={this.handleChange}
          />
        </FormValidator.Field>
        <FormValidator.Field name="terms">
          <Checkbox
            className="blue"
            label="I agree to the Terms and Conditions"
            name="terms"
            onChange={this.handleChange}
          />
        </FormValidator.Field>
        <Button type="submit">Submit</Button>
      </FormValidator>
    )
  }

  handleChange = (event, data) => {
    this.setState(({ value }) => ({
      value: {
        ...value,
        [data.name]: data.value || data.checked
      }
    }))
  }
}

storiesOf('FormValidator', module).add('basic', () => <ExampleForm />)