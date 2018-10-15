import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from 'semantic-ui-react'

storiesOf('Button', module)
  .add('blue', () => (
      <Button className="blue" onClick={action('clicked')}>Hello World</Button>
  ))
  .add('pink', () => (
      <Button className="pink" onClick={action('clicked')}>Hello World</Button>
  ))
  .add('green', () => (
    <Button className="green" onClick={action('clicked')}>Hello World</Button>
))