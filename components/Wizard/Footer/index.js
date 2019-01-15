import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Breadcrumb, Icon } from 'semantic-ui-react'

import WizardFooterBasicControls from './BasicControls'

class WizardFooter extends Component {
  static propTypes = {
    className: PropTypes.string,
    controls: PropTypes.func,
    currentStep: PropTypes.number,
    onChangeStep: PropTypes.func,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    currentStep: 0,
    onChangeStep: () => {}
  }

  render() {
    const {
      controls,
      className,
      currentStep,
      onChangeStep,
      steps,
      ...otherProps
    } = this.props
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
          {this.renderControls({ currentStep, onChangeStep })}
        </div>
      </div>
    )
  }

  renderControls = props => {
    const { controls, steps } = this.props
    return controls ? (
      controls(props)
    ) : (
      <WizardFooterBasicControls {...props} totalSteps={steps.length} />
    )
  }
}

export default WizardFooter
