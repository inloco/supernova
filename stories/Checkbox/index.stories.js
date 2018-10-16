import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Checkbox', module)
  .add('regular', () => (
    <React.Fragment>
      <Checkbox className="blue" label="Blue" defaultChecked />
      <br/><br/>
      <Checkbox className="pink" label="Pink" defaultChecked />
      <br/><br/>
      <Checkbox className="green" label="Green" defaultChecked />
    </React.Fragment>
  ))
  .add('indeterminate', () => (
    <React.Fragment>
      <Checkbox className="blue" label="Blue" defaultIndeterminate />
      <br/><br/>
      <Checkbox className="pink" label="Pink" defaultIndeterminate />
      <br/><br/>
      <Checkbox className="green" label="Green" defaultIndeterminate />
    </React.Fragment>
  ))
  .add('disabled', () => (
    <React.Fragment>
      <Checkbox label="Checked disabled" disabled defaultChecked />
      <br/><br/>
      <Checkbox label="Unchecked disabled" disabled />
    </React.Fragment>
  ))
