import { shallow } from 'enzyme'
import React from 'react'

import FormFieldMessage from '../FieldMessage'

const buildWrapper = props =>
  shallow(
    <FormFieldMessage
      className="test-class"
      message="Custom message"
      {...props}
    />
  )

describe('FormFieldMessage', () => {
  it('should render the message', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })
})
