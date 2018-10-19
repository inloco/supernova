import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Label } from '../../index'

storiesOf('Label', module)
  .add('regular', () => (
    <Label content="Regular label" />
  ))
  .add('removable', () => (
    <Label content="Removable label" onRemove={action('removed')} />
  ))
