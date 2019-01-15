import { shallow } from 'enzyme'
import React from 'react'

import WizardStep from '../'

const buildWrapper = props =>
  shallow(
    <WizardStep className="customTestClass" {...props}>
      Test Child Content
    </WizardStep>
  )

describe('WizardStep', () => {
  it('should render wizard step with child content', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })
})
