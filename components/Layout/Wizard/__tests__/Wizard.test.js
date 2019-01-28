import { shallow } from 'enzyme'
import React from 'react'

import LayoutWizard from '../'
import Wizard from '../../../Wizard'

const buildWrapper = props =>
  shallow(
    <LayoutWizard
      className="customTestClass"
      onStepChange={jest.fn()}
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

  describe('when the current step changes', () => {
    let wrapper

    beforeEach(() => {
      wrapper = buildWrapper()
      const { onChangeStep } = wrapper.find(Wizard).props()
      onChangeStep(2)
    })

    it('should render the wizard at the new current step', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
