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

    it('should call "onStepChange" callback with the new step', () => {
      const {
        props: { onStepChange }
      } = wrapper.instance()
      expect(onStepChange).toHaveBeenCalledWith(2)
    })
  })

  describe('when the component is "controlled"', () => {
    let wrapper

    beforeEach(() => {
      wrapper = buildWrapper({ currentStep: 1 })
    })

    it('should render the wizard at the given current step', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when the step changes in the <Wizard /> component', () => {
      beforeEach(() => {
        const { onChangeStep } = wrapper.find(Wizard).props()
        onChangeStep(2)
      })

      it('should keep rendering the wizard at the step specified by the "currentStep" prop', () => {
        expect(wrapper).toMatchSnapshot()
      })

      it('should call "onStepChange" callback with the new step', () => {
        const {
          props: { onStepChange }
        } = wrapper.instance()
        expect(onStepChange).toHaveBeenCalledWith(2)
      })
    })
  })
})
