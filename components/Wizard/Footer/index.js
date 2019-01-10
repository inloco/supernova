import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Breadcrumb, Icon } from 'semantic-ui-react'

class WizardFooter extends Component {
  static propTypes = {
    className: PropTypes.string,
    controls: PropTypes.func.isRequired,
    initialStepIndex: PropTypes.number,
    onChangeStep: PropTypes.func,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    initialStepIndex: 0,
    onChangeStep: () => {}
  }

  state = {
    currentStep: this.props.initialStepIndex
  }

  render() {
    const {
      controls,
      className,
      initialStepIndex,
      onChangeStep,
      steps,
      ...otherProps
    } = this.props
    const { currentStep } = this.state
    const classes = cx('inloco-wizard__footer', className)
    return (
      <div className={classes} {...otherProps}>
        <Breadcrumb>
          {steps.map((step, index) => {
            const sectionClasses = cx({
              'inloco-wizard__footer-step--current': currentStep === index
            })
            return (
              <React.Fragment key={step}>
                {index !== 0 && (
                  <Breadcrumb.Divider>
                    <Icon className="chevron right" />
                  </Breadcrumb.Divider>
                )}
                <Breadcrumb.Section className={sectionClasses}>
                  {step}
                </Breadcrumb.Section>
              </React.Fragment>
            )
          })}
        </Breadcrumb>
        <div className="inloco-wizard__footer-controls">
          {controls({
            currentStep,
            onChangeStep: this.handleChangeStep
          })}
        </div>
      </div>
    )
  }

  handleChangeStep = newStepIndex => {
    this.setState({ currentStep: newStepIndex })
    this.props.onChangeStep(newStepIndex)
  }
}

export default WizardFooter
