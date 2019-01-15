import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Checkbox, Form } from '../../components'

storiesOf('Form', module).add('basic', () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox className="blue" label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
))
