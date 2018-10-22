import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Card } from '../../components'

storiesOf('Card', module)
  .add('regular', () => (
    <Card
      header="Rock & Ribs"
      description="Restaurante e casa de shows de rock com lounge intimista serve grelhados, hambúrgueres, petiscos e porções."
      meta="Av. Alfredo Lisboa, S/N - Marco Zero"
    />
  ))
