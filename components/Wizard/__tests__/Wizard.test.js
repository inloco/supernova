import { shallow } from 'enzyme'
import React from 'react'

import Wizard from '../'

const buildWrapper = props =>
  shallow(
    <Wizard
      footerProps={{ prop1: 'prop1Value' }}
      onChangeStep={jest.fn()}
      steps={['Step 1', 'Step 2', 'Step 3']}
      {...props}>
      <Wizard.Step>Step 1 Content</Wizard.Step>
      <Wizard.Step>Step 2 Content</Wizard.Step>
      <Wizard.Step>Step 3 Content</Wizard.Step>
    </Wizard>
  )

describe('Wizard', () => {
  it('should render wizard with the first step as the current step by default', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })

  it('should render wizard with the given step as the current step', () => {
    const wrapper = buildWrapper({ currentStep: 1 })
    expect(wrapper).toMatchSnapshot()
  })
})
