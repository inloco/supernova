import { shallow } from 'enzyme'
import React from 'react'

import FormValidatorMessage from '../Message'

const buildWrapper = props =>
  shallow(
    <FormValidatorMessage
      className="test-class"
      message="Custom message"
      {...props}
    />
  )

describe('FormValidatorMessage', () => {
  it('should render the message', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })
})
