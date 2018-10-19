import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Label, RemovableLabel } from '../../components/index'

storiesOf('Label', module)
  .add('regular', () => (
    <Label content="Regular label" size="large" />
  ))
  .add('removable', () => (
    <React.Fragment>
      <RemovableLabel content="Removable label (Small)" size="small" onRemove={action('removed')} />
      <br /><br />
      <RemovableLabel content="Removable label" onRemove={action('removed')} />
      <br /><br />
      <RemovableLabel content="Removable label (Large)" size="large" onRemove={action('removed')} />
      <br /><br />
      <RemovableLabel content="Removable label (Big)" size="big" onRemove={action('removed')} />
    </React.Fragment>
  ))
  .add('icon', () => (
    <React.Fragment>
      <Label content="Label with icon (Small)" icon="home" size="small" />
      <br /><br />
      <Label content="Label with icon" icon="home" />
      <br /><br />
      <Label content="Label with icon (Large)" icon="home" size="large" />
      <br /><br />
      <Label content="Label with icon (Big)" icon="home" size="big" />
    </React.Fragment>
  ))
  .add('pointing', () => (
    <Label pointing="left">Pointing left</Label>
  ))
