import React from 'react'
import { Radio } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Radio', module)
  .add('regular', () => (
    <React.Fragment>
      <Radio className="blue" label="Checked Blue" checked />
      <br/><br/>
      <Radio className="pink" label="Checked Pink" checked />
      <br/><br/>
      <Radio className="green" label="Checked Green" checked />
      <br/><br/>
      <Radio className="blue" label="Unchecked Blue" />
      <br/><br/>
      <Radio className="pink" label="Unchecked Pink" />
      <br/><br/>
      <Radio className="green" label="Unchecked Green" />
    </React.Fragment>
  ))
  .add('disabled', () => (
    <React.Fragment>
      <Radio label="Checked disabled" disabled checked />
      <br/><br/>
      <Radio label="Unchecked disabled" disabled />
    </React.Fragment>
  ))
