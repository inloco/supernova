import React from 'react'
import { Search } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

const friendResults = [
  { title: 'Francisco Gileno' },
  { title: 'Rafael Nunes'},
  { title: 'Maira Bello' }
]

storiesOf('Search', module)
  .add('standard', () => (
    <Search placeholder="Search for Friends" results={friendResults} />
  ))
  .add('disabled', () => (
    <Search placeholder="Search for Friends" disabled />
  ))
  .add('fluid', () => (
    <Search placeholder="Search for Friends" results={friendResults}  fluid  />
  ))
