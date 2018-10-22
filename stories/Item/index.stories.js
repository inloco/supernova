import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Item } from '../../components'

const items = [
  {
    header: 'Rock & Ribs',
    meta: 'Av. Alfredo Lisboa, S/N - Marco Zero'
  },
  {
    header: 'Rock & Ribs',
    meta: 'Av. Alfredo Lisboa, S/N - Marco Zero'
  }
]

storiesOf('Item', module)
  .add('regular', () => (
    <Item.Group items={items} />
  ))
  .add('divided', () => (
    <Item.Group divided items={items} />
  ))
