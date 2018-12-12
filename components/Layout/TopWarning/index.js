import cx from 'classnames'
import React, { Component } from 'react'
import { Message, Sticky } from 'semantic-ui-react'

import LayoutContext from '../LayoutContext'

class TopWarning extends Component {
  static contextType = LayoutContext

  render() {
    const { className, color, ...otherProps } = this.props
    const classes = cx('inloco-layout__top-warning', className)
    return (
      <Sticky className={classes}>
        <Message
          className="inloco-layout__top-warning-message"
          {...otherProps}
        />
      </Sticky>
    )
  }

  componentDidMount() {
    this.context.onWarningMount()
  }
}

export default TopWarning
