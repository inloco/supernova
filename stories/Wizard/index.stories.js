import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Wizard } from '../../components'

storiesOf('Wizard', module).add('footer', () => (
  <Wizard.Footer
    controls={props => <Wizard.FooterBasicControls {...props} totalSteps={3} />}
    steps={['First Step', 'Second Step', 'Third Step']}
  />
))
