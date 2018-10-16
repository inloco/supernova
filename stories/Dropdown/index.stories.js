import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

const friendOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

storiesOf('Dropdown', module)
  .add('resting', () => (
    <Dropdown placeholder="Select Friend" selection options={friendOptions} />
  ))
  .add('search', () => (
    <Dropdown placeholder="Select Friend" selection search options={friendOptions} />
  ))
