import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'

import { Layout } from '../Layout'
import WizardFooter from './Footer'
import WizardFooterBasicControls from './Footer/BasicControls'
import WizardStep from './Step'

export class Wizard extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    currentStep: PropTypes.number,
    footerProps: PropTypes.object,
    onChangeStep: PropTypes.func,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    currentStep: 0,
    footerProps: {}
  }

  static Footer = WizardFooter
  static FooterBasicControls = WizardFooterBasicControls
  static Step = WizardStep

  render() {
    const {
      children,
      className,
      currentStep,
      footerProps,
      onChangeStep,
      steps,
      ...otherProps
    } = this.props
    const classes = cx('inloco-wizard', className)
    return (
      <div className={classes} {...otherProps}>
        <div className="inloco-wizard__content">
          <Transition.Group animation="slide up">
            {React.Children.toArray(children)[currentStep]}
          </Transition.Group>
        </div>
        <WizardFooter
          currentStep={currentStep}
          onChangeStep={onChangeStep}
          steps={steps}
          {...footerProps}
        />
      </div>
    )
  }
}

export default Wizard
