import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

const Buttons = {
  CANCEL: 'cancel',
  PREVIOUS: 'previous',
  SAVE: 'save',
  NEXT: 'next',
  FINISH: 'finish'
}

class WizardFooterBasicControls extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    buttons: PropTypes.shape({
      [Buttons.CANCEL]: PropTypes.any,
      [Buttons.PREVIOUS]: PropTypes.any,
      [Buttons.SAVE]: PropTypes.any,
      [Buttons.NEXT]: PropTypes.any,
      [Buttons.FINISH]: PropTypes.any
    }),
    onCancel: PropTypes.func,
    onChangeStep: PropTypes.func.isRequired,
    onFinish: PropTypes.func,
    onSave: PropTypes.func,
    showBackOnFirstStep: PropTypes.bool,
    showSaveButton: PropTypes.bool,
    totalSteps: PropTypes.number.isRequired
  }

  static defaultProps = {
    buttons: {
      [Buttons.CANCEL]: 'Cancel',
      [Buttons.PREVIOUS]: 'Previous',
      [Buttons.SAVE]: 'Save',
      [Buttons.NEXT]: 'Next',
      [Buttons.FINISH]: 'Finish'
    }
  }

  static Buttons = Buttons

  render() {
    const {
      currentStep,
      buttons,
      onCancel,
      onFinish,
      onSave,
      showBackOnFirstStep,
      showSaveButton,
      totalSteps
    } = this.props
    const isLastStep = currentStep === totalSteps - 1
    return (
      <React.Fragment>
        {Button.create(buttons[Buttons.CANCEL], {
          autoGenerateKey: false,
          defaultProps: {
            onClick: onCancel,
            type: 'button'
          }
        })}
        {(currentStep > 0 || showBackOnFirstStep) &&
          Button.create(buttons[Buttons.PREVIOUS], {
            autoGenerateKey: false,
            defaultProps: {
              onClick: this.handlePrevious,
              type: 'button'
            }
          })}
        {showSaveButton &&
          !isLastStep &&
          Button.create(buttons[Buttons.SAVE], {
            autoGenerateKey: false,
            defaultProps: {
              onClick: onSave,
              type: 'submit'
            }
          })}
        {!isLastStep &&
          Button.create(buttons[Buttons.NEXT], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'blue',
              onClick: this.handleNext,
              type: 'submit'
            }
          })}
        {isLastStep &&
          Button.create(buttons[Buttons.FINISH], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'blue',
              onClick: onFinish,
              type: 'submit'
            }
          })}
      </React.Fragment>
    )
  }

  handleNext = () => {
    const { currentStep, onChangeStep } = this.props
    onChangeStep(currentStep + 1)
  }

  handlePrevious = () => {
    const { currentStep, onChangeStep } = this.props
    onChangeStep(currentStep - 1)
  }
}

export default WizardFooterBasicControls
