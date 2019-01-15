import { shallow } from 'enzyme'
import React from 'react'

import LayoutWizard from '../'

const buildWrapper = props =>
  shallow(
    <LayoutWizard
      className="customTestClass"
      steps={['Step 1', 'Step 2', 'Step 3']}
      {...props}>
      Test Child Content
    </LayoutWizard>
  )

describe('LayoutWizard', () => {
  it('should render layout wizard content for the first step by default', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })

  it('should render layout wizard content for the given initial step', () => {
    const wrapper = buildWrapper({ initialStepIndex: 1 })
    expect(wrapper).toMatchSnapshot()
  })
})
