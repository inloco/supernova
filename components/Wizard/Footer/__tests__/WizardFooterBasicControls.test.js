import { shallow } from 'enzyme'
import React from 'react'
import { Button } from 'semantic-ui-react'

import WizardFooterBasicControls from '../BasicControls'

const buildWrapper = props =>
  shallow(
    <WizardFooterBasicControls
      currentStep={1}
      onChangeStep={jest.fn()}
      totalSteps={3}
      {...props}
    />
  )

describe('WizardFooterBasicControls', () => {
  it('should render "cancel", "previous" and "next" buttons', () => {
    expect(buildWrapper()).toMatchSnapshot()
  })

  it('should render custom buttons when given', () => {
    const wrapper = buildWrapper({
      buttons: {
        [WizardFooterBasicControls.Buttons.CANCEL]: 'Custom Cancel',
        [WizardFooterBasicControls.Buttons.PREVIOUS]: {
          className: 'customPreviousClass',
          content: 'Custom Previous'
        },
        [WizardFooterBasicControls.Buttons.NEXT]: (
          <Button className="customNextClass">Custom Next</Button>
        )
      }
    })
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the current step is the first step', () => {
    it('should render "cancel" and "next" buttons', () => {
      const wrapper = buildWrapper({ currentStep: 0 })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when the "showBackOnFirstStep" prop is true', () => {
    describe('when the current step is the first step', () => {
      it('should render "cancel", "previous" and "next" buttons', () => {
        const wrapper = buildWrapper({
          currentStep: 0,
          showBackOnFirstStep: true
        })
        expect(wrapper).toMatchSnapshot()
      })
    })
  })

  describe('when the current step is the last step', () => {
    it('should render "cancel", "previous" and "finish" buttons', () => {
      const wrapper = buildWrapper({ currentStep: 2 })
      expect(wrapper).toMatchSnapshot()
    })

    it('should call the "onFinish" prop when the "finish" button is clicked', () => {
      const onFinish = jest.fn()
      const wrapper = buildWrapper({ currentStep: 2, onFinish })
      const button = wrapper.find(Button).at(2)
      button.simulate('click')
      expect(onFinish).toHaveBeenCalled()
    })
  })

  describe('when the "showSaveButton" prop is set to "true"', () => {
    it('should render "cancel", "previous", "save" and "next" buttons', () => {
      const wrapper = buildWrapper({ showSaveButton: true })
      expect(wrapper).toMatchSnapshot()
    })

    it('should call the "onSave" prop when the "save" button is clicked', () => {
      const onSave = jest.fn()
      const wrapper = buildWrapper({ showSaveButton: true, onSave })
      const button = wrapper.find(Button).at(2)
      button.simulate('click')
      expect(onSave).toHaveBeenCalled()
    })
  })

  describe('when the "next" button is clicked', () => {
    it('should call "onChangeStep" with the next step index', () => {
      const onChangeStep = jest.fn()
      const wrapper = buildWrapper({ onChangeStep })
      const button = wrapper.find(Button).at(2)
      button.simulate('click')
      expect(onChangeStep).toHaveBeenCalledWith(2)
    })
  })

  describe('when the "previous" button is clicked', () => {
    it('should call "onChangeStep" with the previous step index', () => {
      const onChangeStep = jest.fn()
      const wrapper = buildWrapper({ onChangeStep })
      const button = wrapper.find(Button).at(1)
      button.simulate('click')
      expect(onChangeStep).toHaveBeenCalledWith(0)
    })
  })

  it('should call the "onCancel" prop when the "cancel" button is clicked', () => {
    const onCancel = jest.fn()
    const wrapper = buildWrapper({ onCancel })
    const button = wrapper.find(Button).at(0)
    button.simulate('click')
    expect(onCancel).toHaveBeenCalled()
  })
})
