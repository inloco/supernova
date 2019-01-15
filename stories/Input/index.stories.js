import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input } from '../../components'

storiesOf('Input', module)
  .add('basic', () => <Input placeholder="Input..." />)
  .add('labeled', () => (
    <React.Fragment>
      <Input placeholder="Type a website" label="http://" />
      <br />
      <br />
      <Input
        placeholder="Type a number"
        label="messages"
        labelPosition="right"
      />
    </React.Fragment>
  ))
  .add('disabled', () => <Input placeholder="Input..." disabled />)
  .add('error icon', () => <Input placeholder="Input..." error icon="error" />)
  .add('warning icon', () => (
    <Input placeholder="Input..." className="warning" icon="warning" />
  ))
