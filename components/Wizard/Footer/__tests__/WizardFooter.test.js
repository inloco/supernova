import { shallow } from 'enzyme'
import React from 'react'

import WizardFooter from '../'

const buildWrapper = props =>
  shallow(
    <WizardFooter
      controls={jest.fn().mockReturnValue(<div>Test Controls</div>)}
      onChangeStep={jest.fn()}
      steps={['Step 1', 'Step 2', 'Step 3']}
      {...props}
    />
  )

describe('WizardFooter', () => {
  it('should render wizard with given content', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })

  describe('when the current step changes', () => {
    let wrapper

    beforeEach(() => {
      wrapper = buildWrapper()
      const {
        props: { controls }
      } = wrapper.instance()
      const { onChangeStep } = controls.mock.calls[0][0]
      onChangeStep(1)
    })

    it('should render the new step as the current step', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call "onChangeStep" prop with the new step', () => {
      const {
        props: { onChangeStep }
      } = wrapper.instance()
      expect(onChangeStep).toHaveBeenCalledWith(1)
    })
  })
})
