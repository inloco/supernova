import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Layout } from '../'
import Wizard from '../../Wizard'

export class LayoutWizard extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
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

  render() {
    const {
      children,
      className,
      initialStepIndex,
      mainContentProps,
      steps,
      ...otherProps
    } = this.props
    const { currentStep } = this.state
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
    this.setState({ currentStep: newStep })
  }
}

export default LayoutWizard
