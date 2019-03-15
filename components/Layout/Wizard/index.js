import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Layout } from '../'
import Wizard from '../../Wizard'

export class LayoutWizard extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    currentStep: PropTypes.number,
    headerExtra: PropTypes.node,
    initialStepIndex: PropTypes.number,
    mainContentProps: PropTypes.object,
    onStepChange: PropTypes.func,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    initialStepIndex: 0,
    mainContentProps: {}
  }

  state = {
    currentStep: this.props.initialStepIndex
  }

  isControlled = this.props.currentStep !== undefined

  render() {
    const {
      children,
      className,
      currentStep: currentStepProp,
      headerExtra,
      initialStepIndex,
      onStepChange,
      mainContentProps,
      steps,
      ...otherProps
    } = this.props
    const currentStep = this.isControlled
      ? currentStepProp
      : this.state.currentStep
    const classes = cx('inloco-layout__wizard', className)
    return (
      <React.Fragment>
        <Layout.Header>
          <Layout.HeaderTitle>
            <div className="inloco-layout__wizard-title">
              <div className="inloco-layout__wizard-title-number">
                {currentStep + 1}
              </div>
              {steps[currentStep]}
            </div>
          </Layout.HeaderTitle>
          {headerExtra && (
            <Layout.HeaderControls>{headerExtra}</Layout.HeaderControls>
          )}
        </Layout.Header>
        <Layout.MainContent {...mainContentProps}>
          <Wizard
            className={classes}
            currentStep={currentStep}
            steps={steps}
            onChangeStep={this.handleChangeStep}
            {...otherProps}>
            {children}
          </Wizard>
        </Layout.MainContent>
      </React.Fragment>
    )
  }

  handleChangeStep = newStep => {
    const { onStepChange } = this.props
    onStepChange && onStepChange(newStep)

    if (!this.isControlled) {
      this.setState({ currentStep: newStep })
    }
  }
}

export default LayoutWizard
