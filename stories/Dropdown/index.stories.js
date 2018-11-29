import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

const friendOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

storiesOf('Dropdown', module)
  .add('selection', () => (
    <Dropdown placeholder="Select Friend" selection options={friendOptions} />
  ))
  .add('selection error', () => (
    <Dropdown placeholder="Select Friend" selection error options={friendOptions} />
  ))
  .add('selection warning', () => (
    <Dropdown placeholder="Select Friend" selection className='warning' options={friendOptions} />
  ))
  .add('search', () => (
    <Dropdown placeholder="Select Friend" selection search options={friendOptions} />
  ))
  .add('disabled', () => (
    <Dropdown placeholder="Select Friend" selection options={friendOptions} disabled />
  ))
  .add('header', () => (
    <Dropdown
      placeholder="Select Friend"
      selection
      options={friendOptions}
      header={<Dropdown.Header content="My Header" />}
      selectOnBlur={false}
      selectOnNavigation={false}
    />
  ))
