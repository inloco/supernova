import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Checkbox, Form, Input } from '../../components'

const validate = ({ firstName, lastName, website, terms }) => {
  const errors = {}
  if (!firstName) {
    errors.firstName = 'Required field.'
  }
  if (!lastName) {
    errors.lastName = 'Required field.'
  }
  if (!website || !website.includes('.')) {
    errors.website = [
      'Required field. ',
      'The website must have at least one dot (".").'
    ]
  }
  if (!terms) {
    errors.terms = 'Required field.'
  }
  return errors
}

class ExampleForm extends Component {
  state = {
    messages: validate({}),
    value: {}
  }

  render() {
    const { messages } = this.state
    return (
      <Form>
        <Form.ValidatedField message={messages.firstName}>
          <label>First Name</label>
          <Input
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          />
        </Form.ValidatedField>
        <Form.ValidatedField message={messages.lastName}>
          <label>Last Name</label>
          <Input
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          />
        </Form.ValidatedField>
        <Form.ValidatedField message={messages.website}>
          <label>Website</label>
          <Input
            placeholder="Website"
            label="https://"
            name="website"
            onChange={this.handleChange}
          />
        </Form.ValidatedField>
        <Form.ValidatedField message={messages.terms}>
          <Checkbox
            className="blue"
            label="I agree to the Terms and Conditions"
            name="terms"
            onChange={this.handleChange}
          />
        </Form.ValidatedField>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }

  handleChange = (event, data) => {
    this.setState(({ value }) => {
      const newValue = {
        ...value,
        [data.name]: data.value || data.checked
      }
      return {
        messages: validate(newValue),
        value: newValue
      }
    })
  }
}

storiesOf('Form', module).add('validation', () => <ExampleForm />)
