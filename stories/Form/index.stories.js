import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Checkbox, Input, Form } from '../../components'

storiesOf('Form', module).add('basic', () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <Input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <Input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <label>Website</label>
      <Input placeholder="Website" label="https://" />
    </Form.Field>
    <Form.Field>
      <Checkbox className="blue" label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
))
